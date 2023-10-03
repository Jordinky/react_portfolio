import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Grid from "@mui/material/Grid";
import RoutesTree from "./components/RoutesTree";

function App() {
  return (
    <main>   
      <Grid container direction="column" alignItems="center"  >
        <Grid item>
          <Navbar/>
        </Grid>
        <Grid item>
          <RoutesTree/>
        </Grid>
        <Grid item>
          <Footer/>
        </Grid>
      </Grid>
    </main>
  );
}
export default App;
