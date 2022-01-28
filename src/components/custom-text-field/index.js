import { TextField } from "@mui/material";

const CustomTextField = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  error,
  helperText,
  params,
}) => {
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
      error={error}
      helperText={helperText}
      {...params}
    />
  );
};

export default CustomTextField;
