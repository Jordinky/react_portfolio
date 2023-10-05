import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Info from "./Info";
import Projects from "./Projects";
import AboutMe from "./AboutMe";


const RoutesTree = () => {
    return(
        <Router>
            <Routes>
                <Route path ="/Info" element = {<Info />}/>
                <Route path ="/Projects" element = {<Projects />}/>
                <Route path ="/AboutMe" element = {<AboutMe />}/>  
            </Routes>
        </Router>
    );
};
export default RoutesTree;

