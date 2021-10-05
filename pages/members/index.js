import { Grid } from "@mui/material";
import { useState } from "react";
import MemberCard from "../../src/components/custom-cards/member";
import MemberDrawer from "../../src/components/custom-drawers/member";
import ModuleToolbar from "../../src/components/module-toolbar";
import Layout from "../../src/layouts";

const MEMBERS = [
  {
    code: "SUPERADMIN",
    firstName: "Super",
    lastName: "Admin",
    email: "admin@volkskreisuae.com",
    mobile: "+971555555555",
    whatsApp: "+971555555555",
    points: 100,
    isActive: true,
    createdAt: "2020-10-10T00:00:00.000Z",
    roles: [
      {
        code: "ADMIN",
        name: "Admin",
      },
      {
        code: "MEMBER",
        name: "Member",
      },
    ],
    cars: [
      {
        code: "car_HX4Y2",
        model: "Golf GTI",
        color: "Blue",
        year: "2016",
        plateCode: "DVB",
        plateNumber: "3969",
        plateSource: "Saudi Arabia",
        vinNumber: "WVWFK2AU1GW066747",
      },
    ],
    events: [],
    advertisements: [
      {
        code: "advertisement_B7MPK",
        title: "Boost Gauge",
        price: 100,
        description: "Hello",
        isVerified: false,
        isSold: false,
        url: "boost-gauge",
        createdAt: "2021-10-01T15:10:16.000Z",
        updatedAt: "2021-10-01T15:10:16.000Z",
      },
    ],
  },
];

const Members = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
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
          {MEMBERS.map((_member, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <MemberCard
                data={_member}
                onEdit={() => {
                  setIsEditMode(true);
                  setIsDrawerOpen(true);
                }}
              />
            </Grid>
          ))}
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
