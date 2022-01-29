import { AppBar, IconButton, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import CustomTextField from "../custom-text-field";
import FilterListIcon from "@mui/icons-material/FilterList";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
const ModuleToolbar = ({ onAdd, onSearch }) => {
  return (
    <AppBar position="static" elevation={0} component="div">
      <Toolbar>
        <Box width={1} display="flex" alignItems="center">
          <Box mr={1}>
            <CustomTextField label="Search" onChange={onSearch} />
          </Box>
          {onAdd && (
            <Box>
              <IconButton onClick={onAdd}>
                <AddCircleOutlineOutlinedIcon color="disabled" />
              </IconButton>
            </Box>
          )}
          <Box ml="auto">
            <IconButton>
              <FilterListIcon color="disabled" />
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default ModuleToolbar;
