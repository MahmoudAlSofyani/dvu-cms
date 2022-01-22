import { CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";

const CustomSpinner = () => {
  return (
    <>
      <Box component="main" sx={{ flexGrow: 1, p: 3, textAlign: "center" }}>
        <Typography gutterBottom>Loading...</Typography>
        <CircularProgress />
      </Box>
    </>
  );
};

export default CustomSpinner;
