import { Grid } from "@mui/material";
import { useState } from "react";
import { QueryClient, useQuery } from "react-query";
import CustomerDrawer from "../../src/components/custom-drawers";
import ModuleToolbar from "../../src/components/module-toolbar";
import Layout from "../../src/layouts";
import { searchUser } from "../../src/microservices/users";
import { getSession } from "next-auth/react";

const Members = ({ session }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [uid, setUid] = useState("");

  const { data, isLoading, isError, error } = useQuery("users:search", () =>
    searchUser(session.user.accessToken)
  );

  return (
    <>
      <Layout pageTitle="Members" session={session} isLoading={isLoading}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <ModuleToolbar
              onAdd={() => {
                setIsEditMode(false);
                setIsDrawerOpen(true);
              }}
            />
          </Grid>
          {!isLoading &&
            data.data.map((_member, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                {/* <MemberCard
                  data={_member}
                  onEdit={() => {
                    setIsEditMode(true);
                    setIsDrawerOpen(true);
                    setUid(_member.uid);
                  }}
                /> */}
              </Grid>
            ))}
        </Grid>
      </Layout>
      <CustomerDrawer
        isOpen={isDrawerOpen}
        onClose={() => {
          setIsDrawerOpen(false);
          setUid("");
        }}
        isEditMode={isEditMode}
        uid={uid}
      />
    </>
  );
};

export default Members;

export const getServerSideProps = async (context) => {
  const queryClient = new QueryClient();
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  await queryClient.prefetchQuery("users:search", () =>
    searchUser(session.user.accessToken)
  );

  return {
    props: {
      // dehydratedState: dehydrate(queryClient),
      session,
    },
  };
};
