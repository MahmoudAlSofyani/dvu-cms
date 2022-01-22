import { Drawer } from "@mui/material";
import { Box } from "@mui/system";

const CustomDrawer = ({ isEditMode, isOpen, onClose, uid }) => {
  return (
    <Drawer anchor="right" open={isOpen} onClose={onClose}>
      <Box sx={{ width: { sm: "100vw", md: 400 } }} p={2} height="100vh"></Box>
    </Drawer>
  );
};

export default CustomDrawer;
