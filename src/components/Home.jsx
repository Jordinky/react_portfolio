import Box from "@mui/material/Box";

const Info = () => {

    return(
      <Box direction="column" alignContent="center" 
      sx = {{
        marginTop: { xs: "20vh", sm: "20vh", md: "25vh", lg: "30vh" },
        padding: { xs: "10px", sm: "20px" },
        }}
      >
               <div data-glitch="Jordi Pelaez Calderini" class="glitch">Jordi Pelaez Calderini</div>
               <div data-glitch="FullStack Developer" class="glitch">FullStack Developer</div>


            <Box sx={{justifyContent: 'flex-end' }}>
              <a className="button" href ="https://drive.google.com/file/d/1KHaR1Egi4RRWmlWFX4eDbUjLusrrYJNU/view?usp=sharing">
                <span class="actual-text">&nbsp;Check&nbsp;my&nbsp;cv</span>
                <span aria-hidden="true" class="hover-text">&nbsp;Check&nbsp;my&nbsp;cv</span>
              </a>
            </Box>
        </Box>

    );
};
export default Info;