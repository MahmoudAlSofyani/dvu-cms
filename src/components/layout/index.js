import { Grid } from "@mui/material";
import Container from "@mui/material/Container";
import Header from "../header";

const Layout = ({ children }) => {
  return (
    <Container maxWidth="xl">
      <Header />
      {children}
    </Container>
  );
};

export default Layout;
