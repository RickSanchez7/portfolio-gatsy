import React from "react";

import { FaShareSquare, FaGithub } from "react-icons/fa";

export const data = [
  {
    id: 1,
    featured: true,
    name: "E-commerce",
    description:
      "For this project I worked with react-router-dom for navigation, useContext and useReducer for state management, stripe for payments, Google and E-mail Sign-In with google's firebase and React Hooks. Mobile Responsive.",
    stack: ["React", "SCSS", "Firebase", "Stripe", "Jest/React-Testing"],
    icons: [
      {
        icon: <FaGithub className="social-icon"></FaGithub>,
        url: "https://github.com/RickSanchez7/react-app-roupas-live",
      },
      {
        icon: <FaShareSquare className="social-icon"></FaShareSquare>,
        url: "https://roupas-live.netlify.app/",
        demo: "Live demo",
      },
    ],
  },
  {
    id: 2,
    featured: true,
    name: "MovieDB",
    description:
      "For this React project, we can search for a movie or tv show from an external Api and display the information. Backend for Register/Sign In. Mobile Responsive.",
    stack: [
      "React",
      "SCSS",
      "Bulma",
      "CI/CD",
      "Jest/Enzyme",
      "typescript",
      "node/express",
      "mongodb",
    ],
    icons: [
      {
        icon: <FaGithub className="social-icon"></FaGithub>,
        url: "https://github.com/RickSanchez7/FullStack-Movie-Search",
      },
      {
        icon: <FaShareSquare className="social-icon"></FaShareSquare>,
        url: "https://movie-fullstack.herokuapp.com/",
        demo: "Live demo",
      },
    ],
  },
  {
    id: 3,
    featured: true,
    name: "Instagram Clone",
    description:
      "This is an Instagram Clone where we can create an account, create posts with images, delete and edit them, like posts, comment, follow other users and has dark mode. Mobile Responsive",
    stack: ["React", "Tailwind", "Firebase", "Cloudinary"],
    icons: [
      {
        icon: <FaGithub className="social-icon"></FaGithub>,
        url: "https://github.com/RickSanchez7/insta-clone",
      },
      {
        icon: <FaShareSquare className="social-icon"></FaShareSquare>,
        url: "https://social-networky.netlify.app/",
        demo: "Live demo",
      },
    ],
  },
  {
    id: 4,
    featured: true,
    name: "Sorting Visualizer",
    description:
      "In this project, we can visualize the time complexity of different sorting algorithms.",
    stack: ["React", "TypeScript", "CSS"],
    icons: [
      {
        icon: <FaGithub className="social-icon"></FaGithub>,
        url: "https://github.com/RickSanchez7/sorting-visualizer-ts",
      },
      {
        icon: <FaShareSquare className="social-icon"></FaShareSquare>,
        url: "https://react-ts-sorting-visualizer.netlify.app/",
        demo: "Live demo",
      },
    ],
  },
  {
    id: 5,
    featured: false,
    name: "Portfolio",
    description:
      "This portfolio was made with the Gatsby framework, perfect for fast websites. Mobile Responsive.",
    stack: ["Gatsby", "CSS"],
    icons: [
      {
        icon: <FaGithub className="social-icon"></FaGithub>,
        url: "https://github.com/RickSanchez7/portfolio-gatsy",
      },
      {
        icon: <FaShareSquare className="social-icon"></FaShareSquare>,
        url: "https://portfolio2-gatsby.netlify.app/",
        demo: "Live demo",
      },
    ],
  },
  {
    id: 6,
    featured: false,
    name: "Covid-19 Tracker",
    description:
      "A Covid-19 Tracker, showing all the information of each country in charts and in a world map. Mobile Responsive.",
    stack: ["React", "Styled Components", "Chartjs"],
    icons: [
      {
        icon: <FaGithub className="social-icon"></FaGithub>,
        url: "https://github.com/RickSanchez7/covid-tracker",
      },
      {
        icon: <FaShareSquare className="social-icon"></FaShareSquare>,
        url: "https://covid-19-tracker-styled-react.netlify.app/",
        demo: "Live demo",
      },
    ],
  },
  {
    id: 7,
    featured: false,
    name: "Yoga Website",
    description:
      "For this project, the focus was the style, it's a static website with images and google maps for the address. Mobile Responsive.",
    stack: ["HTML", "CSS", "Javascript", "Parcel"],
    icons: [
      {
        icon: <FaGithub className="social-icon"></FaGithub>,
        url: "https://github.com/RickSanchez7/Yoga-website",
      },
      {
        icon: <FaShareSquare className="social-icon"></FaShareSquare>,
        url: "https://yoga-master-website.netlify.app/",
        demo: "Live demo",
      },
    ],
  },
];
