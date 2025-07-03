import chatImg from '../src/img/chat.webp'
import diceImg from '../src/img/dice.png'
import portfolioImg from '../src/img/portfolio.png'
import library from '../src/img/library.png'

export const info = {

    navItems : [ 
        { 
          index: 1,
          text: "home", 
          link: "/home",
        }, 
        { 
          index: 2,
          text: "skills", 
          link: "/skills",
        }, 
        { 
          index: 3,
          text: "projects", 
          link: "/projects",
        }     
    ],
    projectInfo :[
        {
          index: 11,
          img: portfolioImg,
          text: "Portfolio",
          description: "Personal portfolio website made with React and MUI",
          weblink: "https://jordinky.github.io/react_portfolio/#Info",
          githublink: "https://github.com/Jordinky/react_portfolio",
        },
        {
          index: 13,
          img: diceImg,
          text: "Dice game",
          description: "Dice game made with React, Nodejs, Docker and MySql for a class exercise, made along with a partner.",
          githublink: "https://github.com/ghOdisea/dice-game-docker" ,
        },
        {
          index: 14,
          img: chatImg,
          text: "Chat Application",
          description: "Chat application made for a final project from a bootcamp, this application was made with React,Nodejs and socket.io and MongoDB",
          githublink: "https://github.com/Jordinky/Sprint7" ,
        },
        {
          index: 14,
          img: library,
          text: "Book application",
          description: "Book application made with Lovable, for learning purposes",
          githublink: "https://github.com/Jordinky/author-spark-unleashed" ,
        }
      ],


};