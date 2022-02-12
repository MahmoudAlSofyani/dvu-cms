import { Grid } from "@mui/material";
import ModuleToolbar from "../../src/components/module-toolbar";
import Layout from "../../src/layouts";
import { useState } from "react";
import CustomDrawer from "../../src/components/custom-drawers";
import {
  publishUnpublishAnnouncement,
  searchAnnouncements,
} from "../../src/microservices/announcements";
import { getSession } from "next-auth/react";
import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";
import AnnouncementCard from "../../src/components/announcement-card";

const Announcements = ({ session }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [uid, setUid] = useState("");
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery("announcements:search", () =>
    searchAnnouncements()
  );

  const { mutate: publishUnpublish } = useMutation(
    async (uid) => await publishUnpublishAnnouncement(uid),
    { onSuccess: () => queryClient.invalidateQueries("announcements:search") }
  );

  return (
    <>
      <Layout pageTitle="Announcements" session={session}>
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
            data?.data.map((_announcement) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={_announcement.uid}>
                <AnnouncementCard
                  data={_announcement}
                  onPublishUnpublish={() => publishUnpublish(_announcement.uid)}
                  onEdit={() => {
                    setIsEditMode(true);
                    setUid(_announcement.uid);
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
        type="announcement"
        uid={uid}
      />
    </>
  );
};

export default Announcements;

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

  await queryClient.prefetchQuery("announcements:search", () =>
    searchAnnouncements()
  );

  return {
    props: {
      session,
    },
  };
};
