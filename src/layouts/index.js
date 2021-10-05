import { Container } from "@mui/material";
import CustomNavDrawer from "../components/custom-nav-drawer";

const Layout = ({ children, pageTitle }) => {
  return (
    <Container maxWidth="xl">
      <CustomNavDrawer pageTitle={pageTitle}>{children}</CustomNavDrawer>
    </Container>
  );
};

export default Layout;
