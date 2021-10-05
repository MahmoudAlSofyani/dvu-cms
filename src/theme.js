import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#1F2427",
      paper: "#262B2E",
    },
    text: {
      primary: "#d6d6d6",
      secondary: "#484F50",
    },
    primary: {
      main: "#d6d6d6",
    },
    secondary: {
      main: "#de1f26",
    },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderRight: "none",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          borderRadius: "10px",
        },
      },
    },
  },
});

export default theme;
