
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {info} from "../info";
import Link from "@mui/material/Link";

const Navbar = () => {
    return(
        <AppBar key = "null"position = "fixed" sx = {{background: "none", maxHeight: 100, boxShadow: "none"}}>
          <Toolbar className="myToolbar "  key = "null">
            {info.navItems.map(({ text, link ,index}) => ( 
                <Link 
                    className="navLinks"
                    key = {index}
                    href = {link}
                    sx={{
                        color: "#E2FCEF",
                        margin: 5,
                        textDecoration: "none",
                    }}     
                >{text} 
                </Link> 
            ))} 
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;