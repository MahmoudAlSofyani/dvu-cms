import {
  Checkbox,
  Drawer,
  FormControlLabel,
  Grid,
  Typography,
} from "@mui/material";
import CustomTextField from "../custom-text-field";
import CustomButton from "../custom-button";
import { Box } from "@mui/system";

import CustomTextEditor from "../custom-text-editor";

const EventDrawer = ({ isEditMode, isOpen, onClose }) => {
  return (
    <Drawer anchor="right" open={isOpen} onClose={onClose}>
      <Box sx={{ width: { sm: "100vw", md: 400 } }} p={2} height="100vh">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              {isEditMode ? "Edit Event" : "Add Event"}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <CustomTextField label="Name" />
          </Grid>
          <Grid item xs={12}>
            <CustomTextEditor placeholder="Event details" />
          </Grid>
          <Grid item xs={12}>
            <CustomTextField label="Meeting Point Name" />
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <CustomTextField label="Meeting Time" />
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControlLabel label="Major Event" control={<Checkbox />} />
              </Grid>
            </Grid>
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

export default EventDrawer;
