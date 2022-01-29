import { Drawer } from "@mui/material";
import { Box } from "@mui/system";
import MemberDrawer from "./member";
import EventDrawer from "./event";
import AnnouncementDrawer from "./announcement";

const CustomDrawer = ({ isOpen, onClose, type, uid, isEditMode }) => {
  const getComponent = (type) => {
    switch (type) {
      case "member":
        return <MemberDrawer uid={uid} onClose={onClose} />;
      case "event":
        return (
          <EventDrawer isEditMode={isEditMode} uid={uid} onClose={onClose} />
        );
      case "announcement":
        return (
          <AnnouncementDrawer
            isEditMode={isEditMode}
            uid={uid}
            onClose={onClose}
          />
        );
    }
  };

  return (
    <Drawer anchor="right" open={isOpen} onClose={onClose}>
      <Box sx={{ width: { sm: "100vw", md: 400 } }} p={2} height="100vh">
        {getComponent(type)}
      </Box>
    </Drawer>
  );
};

export default CustomDrawer;
