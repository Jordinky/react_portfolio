import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
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



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
