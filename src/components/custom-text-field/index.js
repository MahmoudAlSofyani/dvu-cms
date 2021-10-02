import { TextField } from "@mui/material";

const CustomTextField = ({ label, type = "text" }) => {
  return (
    <TextField
      label={label}
      type={type}
      size="small"
      variant="outlined"
      color="primary"
      fullWidth
    />
  );
};

export default CustomTextField;
