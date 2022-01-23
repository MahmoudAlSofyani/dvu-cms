import { Drawer } from "@mui/material";
import { Box } from "@mui/system";
import MemberDrawer from "./member";

const CustomDrawer = ({ isOpen, onClose, type, uid }) => {
  const getComponent = (type) => {
    switch (type) {
      case "member":
        return <MemberDrawer uid={uid} onClose={onClose} />;
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
