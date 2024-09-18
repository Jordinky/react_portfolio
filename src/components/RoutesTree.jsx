import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Skills from "./Skills";
import Projects from "./Projects";

const router = createBrowserRouter([
    {
      path: "/home",
      element: <Home />
    },
    {
      path: "/skills",
      element: <Skills />
    },
    {
      path: "/projects",
      element: <Projects />
    }
  ]);

const RoutesTree = () => {
    return(
        <RouterProvider router = {router}/>
    );
};
export default RoutesTree;

