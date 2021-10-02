import { CheckBox } from "@mui/icons-material";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
} from "@mui/material";
import { Box } from "@mui/system";
import CustomTextEditor from "../../custom-text-editor";
import CustomTextField from "../../custom-text-field";
import DrawerLayout from "../layout";

const EditAdvertisement = ({ isOpen, onClose, onCancel, onSave, onDelete }) => {
  return (
    <DrawerLayout
      title="Edit Advertisment"
      isOpen={isOpen}
      onClose={onClose}
      onCancel={onCancel}
      onSave={onSave}
      onDelete={onDelete}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <CustomTextField label="Title" />
        </Grid>
        <Grid item xs={12} md={6}>
          <CustomTextField label="Price" />
        </Grid>
        <Grid item xs={12}>
          <CustomTextEditor label="Description" />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormGroup row>
            <FormControlLabel control={<CheckBox />} label="Verified?" />
            <FormControlLabel control={<CheckBox />} label="Sold?" />
          </FormGroup>
        </Grid>
      </Grid>
    </DrawerLayout>
  );
};

export default EditAdvertisement;
