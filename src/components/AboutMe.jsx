import Box from "@mui/material/Box";
import Typed from "typed.js";
import React from "react";
import { Container } from "@mui/material";

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
    <Container maxWidth="xl">
      <Box
        borderRadius={2}
        sx={{
          marginTop: { xs: "10vh", sm: "15vh", md: "20vh" },
          p: 3,
          marginLeft: "auto",
          marginRight: "auto",
          width: 400, // Fixed width of 400px
          height: 450, // Fixed height of 300px
          border: "1px solid #E2FCEF",
          backgroundColor: "#0d0026",
          display: "flex",
          overflowY: "auto",
        }}
      >
        <span ref={el}></span>
      </Box>
    </Container>
  );
};

export default AboutMe;