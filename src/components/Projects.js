import React from "react";
import Image from "gatsby-image";

const Projects = ({ imageQuery, data }) => {
  const images = [...imageQuery];

  return (
    <section className="section featured-container">
      {data.map(({ id, name, icons, description, stack }, index) => (
        <div className={`project-container`} key={name + "k"}>
          <Image
            fluid={images[id - 1].childImageSharp.fluid}
            className={`project-image ${id % 2 === 0 ? "left" : ""}`}
          />
          <div className={`project-info ${id % 2 === 0 ? "card-left" : ""}`}>
            <div className="project-header">
              <span className="project-number">0{index + 1}.</span>
              <h3 className="project-name">{name}</h3>
            </div>
            <p className="project-description">{description}</p>
            <div className="stack">
              {stack.map((item, index) => (
                <span key={index + 50} className="project-stack">
                  {item}
                </span>
              ))}
            </div>
            <div className="icons">
              {icons.map(({ url, icon }, index) => (
                <a
                  key={index + 100}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="social-link-project"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
