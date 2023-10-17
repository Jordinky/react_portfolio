import Box from "@mui/material/Box";
import Typed from "typed.js";
import React from "react";
import { Container } from "@mui/material";
const AboutMe = ()=> {
    // Create reference to store the DOM element containing the animation
    const el = React.useRef(null);
    React.useEffect(() => {

    const typed = new Typed(el.current, {
        strings: ["C:&Backslash;Users&Backslash;Jordi> cd Skills ^800 <br/>  C:&Backslash;Users&Backslash;Jordi&Backslash;Skills> ls ^800 <br/><br/>Javascript<br/>React<br/>Css<br/>Python<br/>Django<br/>Java<br/>NodeJS<br/>GIT<br/>Github<br/>Mysql<br/>Redis<br/><br/>C:&Backslash;Users&Backslash;Jordi&Backslash;Skills>" ] ,
        typeSpeed: 10,
      });
      
      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }, []);

    return(
        <Container container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
        <Box
            borderRadius={2}

            sx = {{
                marginTop: "20vh",
                p:3,
                marginLeft:1,
                marginRight:1,
                minHeight: "55vh",
                maxHeight: "55vh",
                minWidth: "60vh",
                border: "1px solid #E2FCEF",
                backgroundColor: "#0d0026",    
            }}>
            <span ref ={el} ></span>
        </Box>
        </Container>

    );
};
export default AboutMe;