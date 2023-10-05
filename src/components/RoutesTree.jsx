import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Info from "./components/Info";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";




const router = createHashRouter([
    {
      path: "/",
      element: <Info />
    },
    {
      path: "/AboutMe",
      element: <AboutMe />
    },
    {
      path: "/Projects",
      element: <Projects/ >
    }
  ]);

const RoutesTree = () => {
    return(
        <RouterProvider router = {router}/>

    );
};
export default RoutesTree;

