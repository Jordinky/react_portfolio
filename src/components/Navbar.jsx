import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import {info} from "../info.js";
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
      <AppBar position="fixed" sx = {{background: "none", maxHeight: "5vh", boxShadow: "none"}}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="secondary"
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
                        href ={link}
                        textAlign="center"
                        sx = {{textDecoration: "none",color:"#353B3C"}}
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
                    color: "#353B3C",
                    margin: 5,
                    textDecoration: "none",
                    textShadow: "#ff088c 1px 0 3px"
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