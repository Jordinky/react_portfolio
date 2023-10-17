import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Typed from "typed.js";
import React from "react";
import Profile from "../img/profile.jpeg";

const Info = () => {
    const el = React.useRef(null);
    React.useEffect(() => {
    const typed = new Typed(el.current, {
        strings: ["&lt;DevName value = &lsquo;Jordi Pelaez Calderini&lsquo;/&gt;"],
        typeSpeed: 30,
      });

      return () => {
        typed.destroy();
      };
    }, []);
    return(
        <Grid container
          justifyContent="center"
          alignItems="center"
          position = "static"
          sx={{maxHeight: "100vh", minHeight: "100vh",marginLeft: 3}}>
            <Grid item sx={{marginRight: 8}}>
                <Avatar src = {Profile} alt = "profile picture"
                    sx={{ minWidth: "45vh", height: "45vh", border: "#E2FCEF solid 0.1em" }}/>
            </Grid>
            <Grid item>
              <Grid item >
                <span className = "spanRgb" ref = {el}></span>
              </Grid>
              <Grid item>
                <p>Front-end developer ⌨️ </p>
                <p>Based in Barcelona 🏠</p>
                <p>Looking for a job 🧑‍💼</p>
                <p>Jordipelaez05@gmail.com 📧</p>
              </Grid>
            </Grid>
        </Grid> 
    );
};
export default Info;