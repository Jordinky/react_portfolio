import "./App.css";
import Navbar from "./components/Navbar";
import RoutesTree from "./components/RoutesTree";
import { Box } from "@mui/material";

function App() {
  return (
    <main>   
        <Navbar/>
        <div class="environment"></div>
        <Box sx={{ display: 'flex', justifyContent: 'center', }}>
          <RoutesTree/>
        </Box>
    </main>
  );
}
export default App;
