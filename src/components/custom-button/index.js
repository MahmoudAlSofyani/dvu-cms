import { Button } from "@mui/material";

const CustomButton = ({
  label,
  variant = "contained",
  fullWidth = true,
  onClick,
}) => {
  return (
    <Button
      variant={variant}
      color="secondary"
      size="small"
      fullWidth={fullWidth}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default CustomButton;
