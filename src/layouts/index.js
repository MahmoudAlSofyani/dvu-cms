import { Container, Typography } from "@mui/material";
import CustomNavDrawer from "../components/custom-nav-drawer";
import { Box } from "@mui/system";
import CustomSpinner from "../components/custom-spinner";

const Layout = ({ children, pageTitle, session, isLoading = false }) => {
  return (
    <Container maxWidth="xl">
      <CustomNavDrawer pageTitle={pageTitle} session={session}>
        {!isLoading ? children : <CustomSpinner />}
      </CustomNavDrawer>
    </Container>
  );
};

export default Layout;
