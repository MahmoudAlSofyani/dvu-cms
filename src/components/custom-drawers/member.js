import {
  Checkbox,
  Chip,
  Drawer,
  FormControlLabel,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import CustomTextField from "../custom-text-field";
import CustomButton from "../custom-button";
import { Box } from "@mui/system";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { useFormik } from "formik";
import * as yup from "yup";

const MemberDrawer = ({ isEditMode, isOpen, onClose }) => {
  const validationSchema = yup.object().shape({
    firstName: yup.string().required("Required"),
    lastName: yup.string().required("Required"),
    email: yup.string().required("Required"),
    mobile: yup.string().required("Required"),
    whatsApp: yup.string().optional(),
    isActive: yup.boolean().required(),
    roles: yup.array().required("Required"),
  });

  const formik = useFormik({
    validationSchema,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  return (
    <Drawer anchor="right" open={isOpen} onClose={onClose}>
      <Box sx={{ width: { sm: "100vw", md: 400 } }} p={2} height="100vh">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              {isEditMode ? "Edit Member" : "Add Member"}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <CustomTextField label="First Name" />
              </Grid>
              <Grid item xs={12} md={6}>
                <CustomTextField label="Last Name" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <CustomTextField label="Email" />
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <CustomTextField label="Mobile" />
              </Grid>
              <Grid item xs={12} md={6}>
                <CustomTextField label="WhatsApp" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel control={<Checkbox />} label="Active" />
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={12}>
                <Box display="flex" alignItems="center">
                  <Box>
                    <Typography gutterBottom variant="overline">
                      Roles
                    </Typography>
                  </Box>
                  <Box>
                    <IconButton>
                      <AddOutlinedIcon color="disabled" fontSize="small" />
                    </IconButton>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box display="flex">
                  <Box>
                    <Chip label="Admin" />
                  </Box>
                </Box>
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

export default MemberDrawer;
