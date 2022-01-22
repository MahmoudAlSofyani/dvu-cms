import { TextField } from "@mui/material";

const CustomTextField = ({ label, type = "text", name, value, onChange }) => {
  return (
    <TextField
      fullWidth
      label={label}
      type={type}
      variant="outlined"
      size="small"
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

export default CustomTextField;
