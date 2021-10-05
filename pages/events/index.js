import { Grid } from "@mui/material";
import EventCard from "../../src/components/custom-cards/event";
import ModuleToolbar from "../../src/components/module-toolbar";
import Layout from "../../src/layouts";

const EVENTS = [
  {
    meetingLocation: [25, 25],
    code: "event_QKE07",
    name: "Event 1",
    date: "2021-10-15T00:00:00.000Z",
    meetingName: "Al Naboodah",
    meetingTime: "2020-10-10T00:00:00.000Z",
    details:
      "<p>Awesome event! can't wait to join this drive to jabal jais in the early morning!!!!</p>",
    isMajor: true,
    url: "event-2-event_QKE07",
    members: [],
  },
  {
    meetingLocation: [25, 25],
    code: "event_QKE07",
    name: "Event 2",
    date: "2021-10-15T00:00:00.000Z",
    meetingName: "Al Naboodah",
    meetingTime: "2020-10-10T00:00:00.000Z",
    details:
      "<p>Awesome event! can't wait to join this drive to jabal jais in the early morning!!!!</p>",
    isMajor: false,
    url: "event-2-event_QKE07",
    members: [],
  },
];

const Events = () => {
  return (
    <Layout pageTitle="Events">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ModuleToolbar />
        </Grid>
        {EVENTS.map((_event, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <EventCard data={_event} />
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};

export default Events;
