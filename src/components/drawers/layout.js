import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Drawer,
  IconButton,
  Button,
} from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const DrawerLayout = ({
  children,
  title,
  isOpen,
  onClose,
  onCancel,
  onSave,
  onDelete,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Drawer anchor="right" open={isOpen} onClose={onClose}>
      <Box width={isMobile ? "100vw" : 500} p={4} height="100vh">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography
              variant="h6"
              color="textSecondary"
              sx={{ textTransform: "uppercase", fontWeight: "bold" }}
              gutterBottom
            >
              {title}
            </Typography>
          </Box>
          <Box>
            <IconButton onClick={onDelete}>
              <DeleteOutlineOutlinedIcon color="secondary" />
            </IconButton>
          </Box>
        </Box>
        <Box> {children}</Box>
        <Box
          display="flex"
          position="absolute"
          bottom={10}
          width={1}
          right={0}
          p={4}
        >
          <Button fullWidth onClick={onCancel}>
            Cancel
          </Button>
          <Button
            onClick={onSave}
            fullWidth
            variant="contained"
            color="secondary"
          >
            Save
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};

export default DrawerLayout;
