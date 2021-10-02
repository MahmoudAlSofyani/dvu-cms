import { Grid } from "@mui/material";
import { EditAnnouncement } from "../../src/components/drawers";
import Layout from "../../src/components/layout";
import SectionContainerLayout from "../../src/components/section-container-layout";
import { useState } from "react";
import CustomToolbar from "../../src/components/custom-toolbar";
import { AnnouncementCard } from "../../src/components/custom-cards";

const DUMMY_DATA = [
  {
    code: "XXXX1",
    title: "Advertisement 1",
    details: "<p>Awesome golf gti mk7 for sale. Lady driven british owned</p>",
    poster: "https://picsum.photos/400",
    createdAt: "2021-10-01 15:10:16",
    updatedAt: "2021-10-02 15:10:16",
  },
];

const Announcements = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <>
      <Layout>
        <SectionContainerLayout title="Announcements">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <CustomToolbar />
            </Grid>
            {DUMMY_DATA.map((_data, index) => (
              <Grid item xs={12} md={3} key={index}>
                <AnnouncementCard
                  data={_data}
                  onEdit={() => setIsDrawerOpen(true)}
                  onApprove={() => console.log("Approving: " + _data.code)}
                />
              </Grid>
            ))}
          </Grid>
        </SectionContainerLayout>
      </Layout>
      <EditAnnouncement
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onCancel={() => setIsDrawerOpen(false)}
        onSave={() => console.log("Saving")}
        onDelete={() => console.log("Deleting")}
      />
    </>
  );
};

export default Announcements;
