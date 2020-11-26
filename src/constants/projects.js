import React from "react";

import { FaShareSquare, FaGithub } from "react-icons/fa";

export const data = [
  {
    id: 1,
    featured: true,
    name: "E-commerce",
    description:
      "For this project I worked with react-router-dom for navigation, useContext for state management, stripe for payments, Google and E-mail Sign-In with google's firebase and all done with funcional components. Mobile Responsive.",
    stack: ["React", "SCSS", "Firebase", "Stripe"],
    icons: [
      {
        icon: <FaGithub className="social-icon"></FaGithub>,
        url: "https://github.com/RickSanchez7/react-app-roupas-live",
      },
      {
        icon: <FaShareSquare className="social-icon"></FaShareSquare>,
        url: "https://roupas-live.netlify.app/",
      },
    ],
  },
  {
    id: 2,
    featured: true,
    name: "MovieDB",
    description:
      "For this React project, we can query a movie from an external Api to display the information of the queried movie. Mobile Responsive.",
    stack: ["React", "CSS", "Bulma"],
    icons: [
      {
        icon: <FaGithub className="social-icon"></FaGithub>,
        url: "https://github.com/RickSanchez7/MovieSeach-DB",
      },
      {
        icon: <FaShareSquare className="social-icon"></FaShareSquare>,
        url: "https://moviesearch-db.netlify.app/",
      },
    ],
  },
  {
    id: 3,
    featured: false,
    name: "Yoga Website",
    description:
      "For this project, the focus was the style, it's a static website with images and google maps for the address. Mobile Responsive.",
    stack: ["HTML", "CSS", "Javascript"],
    icons: [
      {
        icon: <FaGithub className="social-icon"></FaGithub>,
        url: "https://github.com/RickSanchez7/Yoga-website",
      },
      {
        icon: <FaShareSquare className="social-icon"></FaShareSquare>,
        url: "https://yoga-master-website.netlify.app/",
      },
    ],
  },
];
