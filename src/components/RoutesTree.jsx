import React from "react";
import { Route, Routes } from "react-router-dom";
import Info from "./Info";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import { HashRouter } from "react-router-dom";

const RoutesTree = () => {
    return(
        <HashRouter>
            <Routes>
                <Route path ="/Info" element = {<Info />}/>
                <Route path ="/Projects" element = {<Projects />}/>
                <Route path ="/AboutMe" element = {<AboutMe />}/>  
            </Routes>
        </HashRouter>
    );
};
export default RoutesTree;

