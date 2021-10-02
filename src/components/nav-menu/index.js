import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";
import dvuLogo from "../../../public/logos/dvu.png";
import { menu } from "../../data/menu";
import Link from "next/link";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  listButton: {
    borderRadius: "5px",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
  },
}));

const NavMenu = ({ isOpen, onClose }) => {
  const classes = useStyles();
  return (
    <Drawer anchor="left" open={isOpen} onClose={onClose}>
      <Box width={300}>
        <Box maxWidth={250} mx="auto">
          <Image src={dvuLogo} priority />
        </Box>
        {menu.map((_menu, index) => (
          <Accordion elevation={0} key={index} disableGutters>
            <AccordionSummary
              expandIcon={
                _menu.routes.length > 0 && <ExpandMoreIcon color="secondary" />
              }
            >
              {_menu.routes.length > 0 ? (
                <Typography
                  variant="body1"
                  style={{ fontWeight: "bold", textTransform: "uppercase" }}
                >
                  {_menu.label}
                </Typography>
              ) : (
                <Link href={_menu.link}>
                  <Typography
                    variant="body1"
                    style={{ fontWeight: "bold", textTransform: "uppercase" }}
                  >
                    {_menu.label}
                  </Typography>
                </Link>
              )}
            </AccordionSummary>
            {_menu.routes.length > 0 && (
              <AccordionDetails>
                <List>
                  {_menu.routes.map((_route, index) => (
                    <Link href={_route.link} key={index}>
                      <ListItem dense>
                        <ListItemButton dense className={classes.listButton}>
                          <ListItemText
                            primary={_route.name}
                            primaryTypographyProps={{ variant: "body1" }}
                          />
                        </ListItemButton>
                      </ListItem>
                    </Link>
                  ))}
                </List>
              </AccordionDetails>
            )}
          </Accordion>
        ))}
      </Box>
    </Drawer>
  );
};

export default NavMenu;
