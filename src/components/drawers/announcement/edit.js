import { Grid } from "@mui/material";
import CustomTextEditor from "../../custom-text-editor";
import CustomTextField from "../../custom-text-field";
import DrawerLayout from "../layout";

const EditAnnouncement = ({ isOpen, onClose, onCancel, onSave, onDelete }) => {
  return (
    <DrawerLayout
      title="Edit Announcement"
      isOpen={isOpen}
      onClose={onClose}
      onCancel={onCancel}
      onSave={onSave}
      onDelete={onDelete}
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <CustomTextField label="Title" />
        </Grid>
        <Grid item xs={12}>
          <CustomTextEditor label="Description" />
        </Grid>
      </Grid>
    </DrawerLayout>
  );
};

export default EditAnnouncement;
