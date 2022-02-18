import {
  Box,
  Grid,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import CustomTextField from "../custom-text-field";
import CustomButton from "../custom-button";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useEffect, useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { useSession } from "next-auth/react";
import {
  createAdvertisement,
  getAdvertisementByUid,
  updateAvdertisementByUid,
} from "../../microservices/advertisements";
import "react-quill/dist/quill.snow.css";
const ReactQuill =
  typeof window === "object" ? require("react-quill") : () => false;

const AdvertisementDrawer = ({ uid, onClose, isEditMode }) => {
  const queryClient = useQueryClient();
  const session = useSession();
  const { data, isLoading, isFetching } = useQuery(
    `advertisements:${uid}`,
    async () => await getAdvertisementByUid(session.data.user.accessToken, uid),
    { enabled: Boolean(isEditMode) !== false }
  );

  const [initialValues, setInitialValues] = useState({
    title: "",
    price: null,
    description: "",
    isSold: false,
  });

  useEffect(() => {
    if (!isLoading && isEditMode && !isFetching)
      setInitialValues({ ...data.data, poster: data.data.poster?.uid });
  }, [data]);

  const validationSchema = yup.object().shape({
    title: yup.string().required("Required"),
    price: yup.number().required("Required"),
    description: yup.string().required("Required"),
    isSold: yup.boolean().optional(),
  });

  const { mutate: editEvent } = useMutation(
    async (values) =>
      await updateAvdertisementByUid(
        session.data.user.accessToken,
        uid,
        values
      ),
    {
      onSuccess: () => queryClient.invalidateQueries("advertisements:search"),
    }
  );

  const { mutate: addAdvertisement } = useMutation(
    async (values) =>
      await createAdvertisement(session.data.user.accessToken, values),
    {
      onSuccess: () => queryClient.invalidateQueries("advertisements:search"),
    }
  );

  const {
    values,
    handleChange,
    handleSubmit,
    errors,
    touched,
    setFieldValue,
    handleBlur,
  } = useFormik({
    validationSchema,
    initialValues,
    enableReinitialize: true,
    onSubmit: async (values) => {
      isEditMode ? editEvent(values) : addAdvertisement(values);
      onClose();
    },
  });

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6">
          {isEditMode ? "Edit" : "Add"} Advertisement
        </Typography>
      </Grid>
      {!isLoading && (
        <>
          <Grid item xs={12}>
            <CustomTextField
              label="Title"
              name="title"
              value={values.title || ""}
              onChange={handleChange}
              error={touched.title && Boolean(errors.title)}
              helperText={touched.title && errors.title}
            />
          </Grid>
          <Grid item xs={12}>
            <CustomTextField
              fullWidth
              label="Price"
              name="price"
              value={values.price}
              onChange={handleChange}
              error={touched.price && Boolean(errors.price)}
              helperText={touched.price && errors.price}
              onBlur={handleBlur}
            />
          </Grid>
          <Grid item xs={12}>
            <ReactQuill
              theme="snow"
              value={values.description}
              onChange={(nv) => setFieldValue("description", nv)}></ReactQuill>
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="body1" gutterBottom>
                  Is item sold?
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <ToggleButtonGroup
                  value={values.isSold}
                  exclusive
                  onChange={(e) => setFieldValue("isSold", e.target.value)}>
                  <ToggleButton value={true}>Sold</ToggleButton>
                  <ToggleButton value={false}>Not Sold</ToggleButton>
                </ToggleButtonGroup>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Box display="flex">
              <CustomButton
                label="Cancel"
                variant="text"
                color="inherit"
                onClick={onClose}
              />
              <CustomButton label="Save" onClick={handleSubmit} />
            </Box>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default AdvertisementDrawer;
