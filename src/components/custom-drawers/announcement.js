import { Drawer, Grid, Typography } from "@mui/material";
import CustomTextField from "../custom-text-field";
import CustomButton from "../custom-button";
import { Box } from "@mui/system";

import CustomTextEditor from "../custom-text-editor";

const AnnouncementDrawer = ({ isEditMode, isOpen, onClose }) => {
  return (
    <Drawer anchor="right" open={isOpen} onClose={onClose}>
      <Box sx={{ width: { sm: "100vw", md: 400 } }} p={2} height="100vh">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              {isEditMode ? "Edit Announcement" : "Add Announcement"}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <CustomTextField label="Title" />
          </Grid>
          <Grid item xs={12}>
            <CustomTextEditor placeholder="Announcement details" />
          </Grid>
        </Grid>
        <Box position="absolute" bottom={20} display="flex">
          <Box>
            <CustomButton label="Cancel" variant="text" onClick={onClose} />
          </Box>
          <Box>
            <CustomButton label="Save" />
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
};

export default AnnouncementDrawer;
