import { Chip, Grid, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getUserByUid, updateUserByUid } from "../../microservices/users";
import CustomTextField from "../custom-text-field";
import * as yup from "yup";
import { useEffect, useState } from "react";
import CustomButton from "../custom-button";
import { Box } from "@mui/system";
import { getAllRoles } from "../../microservices/roles";
import { useSession } from "next-auth/react";

const MemberDrawer = ({ uid, onClose }) => {
  const queryClient = useQueryClient();
  const session = useSession();

  const { data, isLoading } = useQuery(
    `users:${uid}`,
    async () => await getUserByUid(session.data.user.accessToken, uid)
  );

  const [initialValues, setInitialValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    whatsApp: "",
    roles: [],
  });

  useEffect(() => {
    if (!isLoading) {
      setInitialValues({ ...data.data });
    }
  }, [data]);

  const validationSchema = yup.object().shape({
    firstName: yup.string().required("Required"),
    lastName: yup.string().required("Required"),
    email: yup.string().email().required("Requireed"),
    mobile: yup.string().required("Required"),
    whatsApp: yup.string().optional(),
    roles: yup.array().min(1).required("Required"),
  });

  const { data: roles } = useQuery("roles:get", () =>
    getAllRoles(session.data.user.accessToken)
  );

  const { mutate: editUser } = useMutation(
    async (values) => {
      await updateUserByUid(session.data.user.accessToken, uid, values);
    },
    {
      onSuccess: () => queryClient.invalidateQueries("users:search"),
    }
  );

  const { values, handleChange, handleSubmit, errors, touched, setValues } =
    useFormik({
      validationSchema,
      initialValues,
      enableReinitialize: true,
      onSubmit: async (values) => {
        editUser(values);
        onClose();
      },
    });

  const isRoleExist = (role) => {
    return values.roles.some((_role) => _role.name === role);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6">Edit Member</Typography>
      </Grid>
      {!isLoading && (
        <>
          {" "}
          <Grid item xs={12} md={6}>
            <CustomTextField
              label="First Name"
              name="firstName"
              value={values.firstName || ""}
              onChange={handleChange}
              error={touched.firstName && Boolean(errors.firstName)}
              helperText={touched.firstName && errors.firstName}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <CustomTextField
              label="Last Name"
              name="lastName"
              value={values.lastName || ""}
              onChange={handleChange}
              error={touched.lastName && Boolean(errors.lastName)}
              helperText={touched.lastName && errors.lastName}
            />
          </Grid>
          <Grid item xs={12}>
            <CustomTextField
              label="Email"
              name="email"
              value={values.email || ""}
              onChange={handleChange}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
            />
          </Grid>
          <Grid item xs={12}>
            <CustomTextField
              label="Mobile Number"
              name="mobile"
              value={values.mobile || ""}
              onChange={handleChange}
              error={touched.mobile && Boolean(errors.mobile)}
              helperText={touched.mobile && errors.mobile}
            />
          </Grid>
          <Grid item xs={12}>
            <CustomTextField
              label="WhatsApp"
              name="whatsApp"
              value={values.whatsApp || ""}
              onChange={handleChange}
              error={touched.whatsApp && Boolean(errors.whatsApp)}
              helperText={touched.whatsApp && errors.whatsApp}
            />
          </Grid>
          <Grid item xs={12}>
            <Grid item xs={12}>
              <Typography variant="body1">Roles</Typography>
            </Grid>
            <Grid item xs={12}>
              {roles &&
                roles.data &&
                roles.data.map((_role) => (
                  <Chip
                    variant="outlined"
                    sx={{ color: "white" }}
                    key={_role.uid}
                    label={_role.name}
                    color={isRoleExist(_role.name) ? "success" : "default"}
                    onClick={async (e) => {
                      if (isRoleExist(_role.name)) {
                        //remove
                        await setValues({
                          ...values,
                          roles: values.roles.filter(
                            (_r) => _r.name !== _role.name
                          ),
                        });
                      } else {
                        //add
                        await setValues({
                          ...values,
                          roles: [...values.roles, _role],
                        });
                      }
                    }}
                  />
                ))}
            </Grid>
          </Grid>
        </>
      )}
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
    </Grid>
  );
};

export default MemberDrawer;
