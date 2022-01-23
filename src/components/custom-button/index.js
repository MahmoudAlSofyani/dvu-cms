import { Button } from "@mui/material";

const CustomButton = ({
  label,
  variant = "contained",
  fullWidth = true,
  onClick,
  color = "secondary",
  type = "",
}) => {
  return (
    <Button
      type={type}
      variant={variant}
      color={color}
      size="small"
      fullWidth={fullWidth}
      onClick={onClick}>
      {label}
    </Button>
  );
};

export default CustomButton;
