import React from "react";

import AniLink from "gatsby-plugin-transition-link/AniLink";

const data = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "projects",
    url: "/projects/",
  },
  {
    id: 3,
    text: "about",
    url: "/about/",
  },
  {
    id: 4,
    text: "contact",
    url: "/contact/",
  },
];

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      <AniLink fade activeClassName="active" to={link.url}>
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
