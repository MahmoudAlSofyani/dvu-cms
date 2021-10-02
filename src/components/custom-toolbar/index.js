import { AppBar, Button, TextField, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import CustomTextField from "../custom-text-field";

const CustomToolbar = () => {
  return (
    <AppBar position="static" color="inherit" elevation={0}>
      <Toolbar>
        <Box display="flex" alignItems="center">
          <Box mr={2}>
            <CustomTextField label="Search" />
          </Box>
          <Box width={80}>
            <Button
              size="small"
              fullWidth
              variant="contained"
              color="secondary"
            >
              Add
            </Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default CustomToolbar;
