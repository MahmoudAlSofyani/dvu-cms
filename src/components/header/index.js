import { AppBar, IconButton, Box, Toolbar, Avatar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import dvuLogo from "../../../public/logos/dvu.png";
import Image from "next/image";
import { makeStyles } from "@mui/styles";
import NavMenu from "../nav-menu";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.primary,
  },
}));

const Header = () => {
  const classes = useStyles();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <AppBar position="fixed" color="inherit">
        <Toolbar>
          <Box display="flex" alignItems="center" width={1}>
            <Box>
              <IconButton onClick={() => setIsMenuOpen(true)}>
                <MenuIcon color="primary" fontSize="medium" />
              </IconButton>
            </Box>
            <Box maxWidth={200}>
              <Image src={dvuLogo} priority />
            </Box>
            <Box ml="auto" p={3}>
              <Avatar className={classes.avatar}>MA</Avatar>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <NavMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Header;
