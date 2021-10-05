import { AppBar, IconButton, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import CustomTextField from "../custom-text-field";
import FilterListIcon from "@mui/icons-material/FilterList";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

const ModuleToolbar = () => {
  return (
    <AppBar
      position="static"
      sx={{ borderRadius: "5px" }}
      elevation={0}
      component="div"
    >
      <Toolbar>
        <Box width={1} display="flex" alignItems="center">
          <Box mr={1}>
            <CustomTextField label="Search" />
          </Box>
          <Box>
            <IconButton>
              <AddOutlinedIcon color="secondary" />
            </IconButton>
          </Box>
          <Box ml="auto">
            <IconButton>
              <FilterListIcon color="primary" />
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default ModuleToolbar;
