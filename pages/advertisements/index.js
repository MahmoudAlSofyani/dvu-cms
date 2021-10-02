import { Grid } from "@mui/material";
import { AdvertisementCard } from "../../src/components/custom-cards";
import { EditAdvertisement } from "../../src/components/drawers";
import Layout from "../../src/components/layout";
import SectionContainerLayout from "../../src/components/section-container-layout";
import { useState } from "react";
import CustomToolbar from "../../src/components/custom-toolbar";

const DUMMY_AD = [
  {
    code: "XXXX1",
    title: "Advertisement 1",
    price: 1000,
    description:
      "<p>Awesome golf gti mk7 for sale. Lady driven british owned</p>",
    images: [
      "https://picsum.photos/200",
      "https://picsum.photos/300",
      "https://picsum.photos/400",
    ],
    isVerified: true,
    isSold: true,
    createdAt: "2021-10-01 15:10:16",
    updatedAt: "2021-10-02 15:10:16",
    user: {
      firstName: "Super",
      lastName: "Admin",
      code: "SUPERADMIN",
    },
  },
  {
    code: "XXXX2",
    title: "Advertisement 2",
    price: 1000,
    description:
      "<p>Awesome golf gti mk7 for sale. Lady driven british owned</p>",
    images: [
      "https://picsum.photos/200",
      "https://picsum.photos/300",
      "https://picsum.photos/400",
    ],
    isVerified: false,
    isSold: false,
    createdAt: "2021-10-01 15:10:16",
    updatedAt: "2021-10-02 15:10:16",
    user: {
      firstName: "Super",
      lastName: "Admin",
      code: "SUPERADMIN",
    },
  },
];

const Advertisements = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <>
      <Layout>
        <SectionContainerLayout title="Advertisements">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <CustomToolbar />
            </Grid>
            {DUMMY_AD.map((_ad, index) => (
              <Grid item xs={12} md={3} key={index}>
                <AdvertisementCard
                  data={_ad}
                  onEdit={() => setIsDrawerOpen(true)}
                  onApprove={() => console.log("Approving: " + _ad.code)}
                />
              </Grid>
            ))}
          </Grid>
        </SectionContainerLayout>
      </Layout>
      <EditAdvertisement
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onCancel={() => setIsDrawerOpen(false)}
        onSave={() => console.log("Saving")}
        onDelete={() => console.log("Deleting")}
      />
    </>
  );
};

export default Advertisements;
