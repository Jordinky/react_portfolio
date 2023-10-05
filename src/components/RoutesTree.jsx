import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Info from "./Info";
import AboutMe from "./AboutMe";
import Projects from "./Projects";

const router = createHashRouter([
    {
      path: "/Info",
      element: <Info />
    },
    {
      path: "/AboutMe",
      element: <AboutMe />
    },
    {
      path: "/Projects",
      element: <Projects />
    }
  ]);

const RoutesTree = () => {
    return(
        <RouterProvider router = {router}/>
    );
};
export default RoutesTree;

