import { Button } from "@mui/material";

const CustomButton = ({
  label,
  variant = "contained",
  fullWidth = true,
  onClick,
  color = "secondary",
  type = "",
  component = "",
}) => {
  return (
    <Button
      component={component}
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
