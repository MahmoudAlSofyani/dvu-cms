import { Grid } from "@mui/material";
import CustomDrawer from "../../src/components/custom-drawers/";
import ModuleToolbar from "../../src/components/module-toolbar";
import Layout from "../../src/layouts";
import { useState } from "react";
import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";
import { getSession } from "next-auth/react";
import {
  publishUnpublishEvent,
  searchEvents,
} from "../../src/microservices/events";
import EventCard from "../../src/components/event-card";

const Events = ({ session }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [uid, setUid] = useState("");
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery("events:search", () => searchEvents());
  const { mutate: publishUnpublish } = useMutation(
    async (uid) => {
      await publishUnpublishEvent(uid);
    },
    {
      onSuccess: () => queryClient.invalidateQueries("events:search"),
    }
  );

  return (
    <>
      <Layout pageTitle="Events" session={session}>
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
            data?.data.map((_event) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={_event.uid}>
                <EventCard
                  data={_event}
                  onPublishUnpublish={() => publishUnpublish(_event.uid)}
                  onEdit={() => {
                    setIsEditMode(true);
                    setUid(_event.uid);
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
          setIsEditMode(false);
          setIsDrawerOpen(false);
          setUid("");
        }}
        isEditMode={isEditMode}
        type="event"
        uid={uid}
      />
    </>
  );
};

export default Events;

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

  await queryClient.prefetchQuery("events:search", () => searchEvents());

  return {
    props: {
      session,
    },
  };
};
