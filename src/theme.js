import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    // background: {
    //   default: "#171717",
    //   paper: "#252526",
    // },
    primary: {
      main: "#333333",
    },
    secondary: {
      main: "#de1f26",
    },
    text: {
      primary: "#fafafa",
      secondary: "#454545",
    },
    // error: {
    //   main: red.A400,
    // },
    divider: "#080707",
    background: {
      default: "#121212",
      paper: "#080707",
    },
  },
});

export default theme;
