import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import {info} from "../info.jsx";
import Link from "@mui/material/Link";

import MenuItem from "@mui/material/MenuItem";



const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    return (
      <AppBar position="fixed" sx = {{background: "none", maxHeight: 100, boxShadow: "none"}}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left"
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" }
                }}
              >
                {info.navItems.map(({ text, link ,index}) => (
                  <MenuItem key={index} onClick={handleCloseNavMenu} href = {link}>
                    <Link  
                        key = {index}
                        textAlign="center"
                        sx = {{textDecoration: "none"}}
                        >{text}</Link>
                        
                  </MenuItem>
                ))}
              </Menu>
            </Box>
 
            <Box justifyContent="center" sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {info.navItems.map(({ text, link ,index}) => (
                <Link
                className="navLinks"
                key = {index}
                href = {link}
                sx={{
                    color: "#6C969D",
                    margin: 5,
                    textDecoration: "none",
                }}  
                >
                  {text}
                </Link>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    );
};

export default Navbar;