import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { info } from "../info.js";
import Link from "@mui/material/Link";
import MenuItem from "@mui/material/MenuItem";
import { useScrollTrigger } from "@mui/material";

function ElevationScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return children
    ? React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
        sx: {
          backgroundColor: trigger ? "#F8F8F8cc" : "transparent", // cc for slight opacity
          transition:
            "background-color 0.3s ease-in-out, backdrop-filter 0.3s ease-in-out",
          backdropFilter: trigger ? "blur(10px)" : "none",
          WebkitBackdropFilter: trigger ? "blur(10px)" : "none", // for Safari support
        },
      })
    : null;
}

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <ElevationScroll>
      <AppBar position="fixed">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ backgroundColor:"black",flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
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
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {info.navItems.map(({ text, link, index }) => (
                  <MenuItem
                    key={index}
                    onClick={handleCloseNavMenu}
                    href={link}
                  >
                    <Link
                      key={index}
                      href={link}
                      textAlign="center"
                      fontFamily="monospace"                   
                      sx={{ textDecoration: "none", color: "#353B3C" }}
                    >
                      {text}
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>{"<jp>"}</Box>
            <Box
              justifyContent="center"
              sx={{
                paddingTop: 3,
                paddingBottom: 3,
                flexGrow: 1,
                display: { xs: "none", md: "1em" },
              }}
            >
              {info.navItems.map(({ text, link, index }) => (
                <Link
                  className="navLinks"
                  key={index}
                  href={link}
                  sx={{
                    color: "#353B3C",
                    margin: 5,
                    textDecoration: "none",
                    textShadow: "#ff088c 1px 0 3px",
                  }}
                >
                  {text}
                </Link>
              ))}
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <h3>{"<Jordi Pelaez Calderini>"}</h3>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ElevationScroll>
  );
};

export default Navbar;
