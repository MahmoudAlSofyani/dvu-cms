import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import EventIcon from "@mui/icons-material/Event";
import GroupIcon from "@mui/icons-material/Group";

export const menu = [
  {
    label: "Advertisements",
    link: "/advertisements",
    icon: <AttachMoneyIcon color="primary" />,
    routes: [],
  },
  {
    label: "Announcements",
    link: "/announcements",
    icon: <AnnouncementIcon color="primary" />,
    routes: [],
  },
  {
    label: "Events",
    link: "/events",
    icon: <EventIcon color="primary" />,
    routes: [],
  },
  {
    label: "Users",
    link: "/users",
    icon: <GroupIcon color="primary" />,
    routes: [],
  },
];
