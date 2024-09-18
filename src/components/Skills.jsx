
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
      typeSpeed: 10,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
    <Grid Container sx = {{marginTop: { xs: "10vh", sm: "15vh", md: "20vh" }, minWidth: "50vw", maxWidth: "50vw"}}>
      <Grid container
        direction="row"
        sx={{
          p:0.5,
          backgroundColor: "#DAD9D9",
          borderRadius: 1,
          maxWidth: "50vw",
        }}>
        <span id="red"></span>
        <span id="yellow"></span>
        <span id="green"></span>
      </Grid>
      <Grid item >
        <Container
          sx={{
            paddingTop: 3 ,
            minHeight: "55vh", // Adjusted minHeight for responsiveness
            maxHeight: "55vh",
            backgroundColor: "#33485E",
            display: "flex",
            borderRadius: 1
          }}
          >
            <span ref={el}></span>
          </Container>
      </Grid>
      
    </Grid>

    </>
  );
};

export default AboutMe;


