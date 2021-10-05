import { Grid } from "@mui/material";
import AnnouncementCard from "../../src/components/custom-cards/announcement";
import ModuleToolbar from "../../src/components/module-toolbar";
import Layout from "../../src/layouts";
import AnnouncementDrawer from "../../src/components/custom-drawers/announcement";
import { useState } from "react";

const ANNOUNCEMENTS = [
  {
    code: "announcement_SX5ZZ",
    title: "3W Healthcare",
    details: "Some medical company. Awesome stuff",
    url: "3w-healthcare",
    createdAt: "2021-10-02T15:29:13.000Z",
    updatedAt: "2021-10-02T15:29:13.000Z",
    poster: {
      code: "ba04441812685d9573b7ba47c4fd2475",
      name: "3W.png",
      type: "image/png",
      size: 28759,
    },
  },
  {
    code: "announcement_SX5ZZ",
    title: "3W Healthcare",
    details: "Some medical company. Awesome stuff",
    url: "3w-healthcare",
    createdAt: "2021-10-02T15:29:13.000Z",
    updatedAt: "2021-10-02T15:29:13.000Z",
    poster: {
      code: "ba04441812685d9573b7ba47c4fd2475",
      name: "3W.png",
      type: "image/png",
      size: 28759,
    },
  },
];

const Announcements = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  return (
    <>
      <Layout pageTitle="Announcements">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <ModuleToolbar
              onAdd={() => {
                setIsEditMode(false);
                setIsDrawerOpen(true);
              }}
            />
          </Grid>
          {ANNOUNCEMENTS.map((_announcement, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <AnnouncementCard
                data={_announcement}
                onEdit={() => {
                  setIsEditMode(true);
                  setIsDrawerOpen(true);
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Layout>
      <AnnouncementDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        isEditMode={isEditMode}
      />
    </>
  );
};

export default Announcements;
