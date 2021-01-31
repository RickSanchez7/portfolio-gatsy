import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Projects from "./Projects";
import { data } from "../constants/projects";

const FeaturedProjects = () => {
  const { image1, image2, image3 } = useStaticQuery(query);
  const featuredImages = [image1, image2, image3];
  const featuredData = data.filter(({ featured }) => featured === true);

  return (
    <div className="section featured-container">
      <h2 className="featured-title">
        Featured Projects <div className="underline"></div>
      </h2>

      <Projects imageQuery={featuredImages} data={featuredData} />
      <AniLink fade to="projects" className="btn">
        projects
      </AniLink>
    </div>
  );
};

export const query = graphql`
  {
    image1: file(relativePath: { eq: "projects/image-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image2: file(relativePath: { eq: "projects/image-2.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image3: file(relativePath: { eq: "projects/image-4.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default FeaturedProjects;
