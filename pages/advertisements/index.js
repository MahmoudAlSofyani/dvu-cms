import { Grid } from "@mui/material";
import ModuleToolbar from "../../src/components/module-toolbar";
import Layout from "../../src/layouts";
import { useState } from "react";
import CustomDrawer from "../../src/components/custom-drawers";
import { getSession } from "next-auth/react";
import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";
import { useDebounce } from "use-debounce";
import {
  searchAdvertisements,
  verifyUnverifyAdvertisement,
} from "../../src/microservices/advertisements";
import AdvertisementCard from "../../src/components/advertisement-card";

const Advertisements = ({ session }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [uid, setUid] = useState("");
  const [searchText, setSearchText] = useState("");
  const [value] = useDebounce(searchText, 500);
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery(["advertisements:search", value], () =>
    searchAdvertisements(session.user.accessToken, {
      filters: {
        search: value,
      },
      limit: 100,
    })
  );

  const { mutate: verifyUnverify } = useMutation(
    async (uid) =>
      await verifyUnverifyAdvertisement(session.user.accessToken, uid),
    { onSuccess: () => queryClient.invalidateQueries("advertisements:search") }
  );

  return (
    <>
      <Layout pageTitle="Advertisements" session={session}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <ModuleToolbar
              searchValue={searchText}
              onSearch={(e) => setSearchText(e.target.value)}
              // onAdd={() => {
              //   setIsEditMode(false);
              //   setIsDrawerOpen(true);
              // }}
            />
          </Grid>
          {!isLoading &&
            data?.data.map((_advertisement) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={_advertisement.uid}>
                <AdvertisementCard
                  data={_advertisement}
                  onVerifyUnverify={() => verifyUnverify(_advertisement.uid)}
                  onEdit={() => {
                    setIsEditMode(true);
                    setUid(_advertisement.uid);
                    setIsDrawerOpen(true);
                  }}
                />
              </Grid>
            ))}
        </Grid>
      </Layout>
      <CustomDrawer
        isOpen={isDrawerOpen}
        onClose={() => {
          setIsDrawerOpen(false);
          setIsEditMode(false);
          setUid("");
        }}
        isEditMode={isEditMode}
        type="advertisement"
        uid={uid}
      />
    </>
  );
};

export default Advertisements;

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

  await queryClient.prefetchQuery("advertisements:search", () =>
    searchAdvertisements()
  );

  return {
    props: {
      session,
    },
  };
};
