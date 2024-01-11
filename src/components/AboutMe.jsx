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
          marginTop: { xs: "10vh", sm: "15vh", md: "20vh" }, // Adjusted marginTop for different screen sizes
          p: 3,
          marginLeft: 1,
          marginRight: 1,
          minHeight: "45vh", // Adjusted minHeight for responsiveness
          maxHeight: "55vh",
          minWidth: "45vh", // Adjusted minHeight for responsiveness
          maxWidth: "55vh",
          width: "90%", // Adjusted width for responsiveness
          border: "1px solid #E2FCEF",
          backgroundColor: "#0d0026",
          display: "flex",
          overflow: "hidden",
        }}
      >
        <span ref={el}></span>
      </Box>
    </Container>
  );
};

export default AboutMe;
