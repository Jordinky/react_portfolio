
import Typed from "typed.js";
import React from "react";
import { Grid } from "@mui/material";
import Container from "@mui/material/Container";

const AboutMe = () => {
  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "C:&Backslash;Users&Backslash;Jordi> cd Skills ^800 <br/>  C:&Backslash;Users&Backslash;Jordi&Backslash;Skills> ls ^800 <br/><br/>Javascript<br/>React<br/>Css<br/>Python<br/>Django<br/>Java<br/>NodeJS<br/>GIT<br/>Github<br/>Mysql<br/>Redis<br/><br/>C:&Backslash;Users&Backslash;Jordi&Backslash;Skills>",
      ],
      typeSpeed: 10, showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
    <Grid Container position = "relative" 
    sx = {{
      width: {xs: "100vw", sm: "70vw",md:"50vw"},
      }}>
      <Grid container
        direction="row"
        sx={{
          p:0.5,
          backgroundColor: "#846A6A",
          borderRadius: 1,
         
        }}>
        <span id="red"></span>
        <span id="yellow"></span>
        <span id="green"></span>
      </Grid>
      <Grid item >
        <Container
          sx={{
            paddingTop: 3 ,
            paddingBottom:3,
            minHeight: "60vh",
            backgroundColor: "#353B3C",
            display: "flex",
            borderRadius: 1
          }}
          >
            <span class ="skills"ref={el}></span>
          </Container>
      </Grid>
    </Grid>
    </>
  );
};

export default AboutMe;


