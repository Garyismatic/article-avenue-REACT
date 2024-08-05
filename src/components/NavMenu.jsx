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
import './CSS-modules/navmenu.css'

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
            <ListItem key={text}>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <div>
      <IconButton aria-label="navigation menu" onClick={handleClick}>
        <MenuIcon />
      </IconButton>
      <Drawer open={open} onClose={handleClick}>
        {Menu}
      </Drawer>
    </div>
  );
}

export default NavMenu;
