import { Container } from "@mui/material";
import CustomNavDrawer from "../components/custom-nav-drawer";

const Layout = ({ children, pageTitle, session }) => {
  return (
    <Container maxWidth="xl">
      <CustomNavDrawer pageTitle={pageTitle} session={session}>
        {children}
      </CustomNavDrawer>
    </Container>
  );
};

export default Layout;
