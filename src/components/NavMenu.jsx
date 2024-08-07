import { useState } from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import "./CSS-modules/navmenu.css";
import { Link } from "react-router-dom";

function NavMenu() {
  const [open, setOpen] = useState(false);

  const menuOptions = ["Articles", "Topics", "Authors"];

  const handleClick = () => {
    setOpen(!open);
  };

  const Menu = (
    <Box sx={{ width: 200 }} role="presentation" onClick={handleClick}>
      <List>
        <div className="menu-header">
          <ListItem key="menu-title">MENU</ListItem>
        </div>
        {menuOptions.map((text) => {
          return (
            <Link to={'/' + text.toLowerCase()} className="navmenu-link" key={text}>
              <ListItem >
                <ListItemButton>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            </Link>
          );
        })}
      </List>
    </Box>
  );

  return (
    <>
    <div className="nav-menu-button">
      <IconButton aria-label="navigation menu" onClick={handleClick}>
        <MenuIcon />
      </IconButton>
    </div>
      <Drawer open={open} onClose={handleClick}>
        {Menu}
      </Drawer>
    </>
  );
}

export default NavMenu;
