import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
const Info = () => {
    return(
      <Grid container direction="column" alignContent="center" sx = {{marginTop: { xs: "12vh", sm: "15vh", md: "22vh" }}}>
          <Grid item >
              <p class="hero glitch" data-text="Jordi Pelaez Calderini"><span>Jordi Pelaez Calderini</span></p>
              <p class="hero glitch" data-text="Fullstack Developer"><span>Fullstack Developer</span></p>    
          </Grid>
          <Grid item>
            <Box sx={{justifyContent: 'flex-end' }}>
              <button className="button">
                <span class="actual-text">&nbsp;Download&nbsp;my&nbsp;cv</span>
                <span aria-hidden="true" class="hover-text">&nbsp;Download&nbsp;my&nbsp;cv</span>
              </button>
            </Box>

          </Grid>

      </Grid>
    );
};
export default Info;