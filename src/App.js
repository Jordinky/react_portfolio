import "./App.css";
import Navbar from "./components/Navbar";
import SocialMediaIcons from "./components/SocialMediaIcons";
import Grid from "@mui/material/Grid";
import RoutesTree from "./components/RoutesTree";
import { Box } from "@mui/material";

function App() {
  return (
    <main>   
      <Grid container direction="column" >    
        <Grid item>
          <Navbar/>
        </Grid>
        <Grid>
          <div class="environment"></div>
        <Box sx={{ display: 'flex', justifyContent: 'center', }}>
          <RoutesTree/>
          <SocialMediaIcons/>
        </Box>
          <Grid item> 
            
          </Grid>
        </Grid>

          

      </Grid>
    </main>
  );
}
export default App;
