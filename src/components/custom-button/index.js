import { Button } from "@mui/material";

const CustomButton = ({ label }) => {
  return (
    <Button variant="contained" color="secondary" size="small">
      {label}
    </Button>
  );
};

export default CustomButton;
