import React from "react";

import AniLink from "gatsby-plugin-transition-link/AniLink";

const data = [
  {
    id: 1,
    text: "home",
    url: "/",
    label: "home",
  },
  {
    id: 2,
    text: "projects",
    url: "/projects",
    label: "projects",
  },
  {
    id: 3,
    text: "about",
    url: "/about",
    label: "about me",
  },
  {
    id: 4,
    text: "contact",
    url: "/contact",
    label: "contact",
  },
];

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      <AniLink
        fade
        activeClassName="active"
        aria-label={link.label}
        to={link.url}
      >
        {link.text}
      </AniLink>
    </li>
  );
});

export default ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  );
};
