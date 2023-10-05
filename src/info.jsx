import Portfolio from "../src/img/mock1.jpg";
import Pokedex from "../src/img/mock2.jpg";
import NOCE from "../src/img/mock3.jpg";


export const info = {

    navItems : [ 
        { 
          index: 1,
          text: "home", 
          link: "/Info",
        }, 
        { 
          index: 2,
          text: "about me", 
          link: "/AboutMe",
        }, 
        { 
          index: 3,
          text: "projects", 
          link: "/Projects",
        },       
    ],
    projectInfo :[
        {
          index: 11,
          img: Portfolio,
          text: "Portfolio",
          description: "Made with create-react-app and Mui",
          link: "https://react.dev/learn/react-developer-tools#browser-extension",
        },
        {
          index: 12,
          img: Pokedex,
          text: "Pokedex",
          description: "Pokedex from the pokemon anime, made with django and css3",
          link: "https://react.dev/learn/react-developer-tools#browser-extension",
        },
        {
          index: 13,
          img: NOCE,
          text: "NBA api",
          description: "data fetch from the nba api with filter",
          link: "https://react.dev/learn/react-developer-tools#browser-extension" ,
        },
      ],


};