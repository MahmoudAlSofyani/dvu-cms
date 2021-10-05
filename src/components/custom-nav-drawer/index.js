import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import dvuSmallLogo from "../../../public/logos/dvu-small.png";
import Image from "next/image";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import NewReleasesOutlinedIcon from "@mui/icons-material/NewReleasesOutlined";
import EventOutlinedIcon from "@mui/icons-material/EventOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import { useRouter } from "next/router";
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
  Avatar,
  Divider,
} from "@mui/material";

const drawerWidth = 90;

function CustomNavDrawer({ window, children, pageTitle }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const router = useRouter();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box textAlign="center">
      <Box position="relative">
        <Image src={dvuSmallLogo} priority />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-evenly"
        height={1}
      >
        <Box>
          <IconButton onClick={() => router.push("/dashboard")}>
            <DashboardOutlinedIcon
              color={router.pathname === "/dashboard" ? "secondary" : "inherit"}
            />
          </IconButton>
        </Box>
        <Box>
          <IconButton onClick={() => router.push("/members")}>
            <GroupsOutlinedIcon
              color={router.pathname === "/members" ? "secondary" : "inherit"}
            />
          </IconButton>
        </Box>
        <Box>
          <IconButton onClick={() => router.push("/announcements")}>
            <NewReleasesOutlinedIcon
              color={
                router.pathname === "/announcements" ? "secondary" : "inherit"
              }
            />
          </IconButton>
        </Box>
        <Box>
          <IconButton onClick={() => router.push("/events")}>
            <EventOutlinedIcon
              color={router.pathname === "/events" ? "secondary" : "inherit"}
            />
          </IconButton>
        </Box>
        <Box>
          <IconButton>
            <ExitToAppOutlinedIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        color={isMobile ? "primary" : "transparent"}
        elevation={0}
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            width={1}
          >
            <Box>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  textTransform: "uppercase",
                  fontWeight: "bold",
                }}
              >
                {pageTitle}
              </Typography>
            </Box>
            <Box>
              <Avatar>M</Avatar>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundImage: "none",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

export default CustomNavDrawer;
