import { Grid } from "@mui/material";
import { useState } from "react";
import { dehydrate, QueryClient, useQuery } from "react-query";
import MemberCard from "../../src/components/custom-cards/member";
import MemberDrawer from "../../src/components/custom-drawers/member";
import ModuleToolbar from "../../src/components/module-toolbar";
import Layout from "../../src/layouts";
import { searchUser } from "../../src/microservices/users";

const Members = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  const { data, isLoading, isError, error } = useQuery(
    "users:search",
    searchUser
  );

  console.log({ data, isLoading, isError, error });

  return (
    <>
      <Layout pageTitle="Members">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <ModuleToolbar
              onAdd={() => {
                setIsEditMode(false);
                setIsDrawerOpen(true);
              }}
            />
          </Grid>
          {/* {MEMBERS.map((_member, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <MemberCard
                data={_member}
                onEdit={() => {
                  setIsEditMode(true);
                  setIsDrawerOpen(true);
                }}
              />
            </Grid>
          ))} */}
        </Grid>
      </Layout>
      <MemberDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        isEditMode={isEditMode}
      />
    </>
  );
};

export default Members;

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("users:search", searchUser);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
