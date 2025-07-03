import "./App.css";
import Navbar from "./components/Navbar";
import RoutesTree from "./components/RoutesTree";
import { Box } from "@mui/material";

function App() {
  return (
    <main>   
        <Navbar/>
        <div class="environment"></div>
        <Box sx={{ marginTop: { xs: "20vh", sm: "25vh", md: "20vh" }, display: 'flex', justifyContent: 'center', }}>
          <RoutesTree/>
        </Box>
    </main>
  );
}
export default App;
