import { TextField } from "@mui/material";

const CustomTextField = ({ label, type = "text" }) => {
  return (
    <TextField
      fullWidth
      label={label}
      type={type}
      variant="outlined"
      size="small"
    />
  );
};

export default CustomTextField;
