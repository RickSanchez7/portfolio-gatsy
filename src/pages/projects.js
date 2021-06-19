import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/Layout";
import Projects from "../components/Projects";
import { data } from "../constants/projects";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const ProjectsPage = () => {
  const { image1, image2, image3, image4, image5, image6 } = useStaticQuery(
    query
  );
  const allImages = [image1, image2, image3, image4, image5, image6];

  return (
    <Layout>
      <div className="section featured-container">
        <h2 className="featured-title">
          All Projects<div className="underline"></div>
        </h2>
        <Projects imageQuery={allImages} data={data} />
        <AniLink fade to="/" className="btn">
          home
        </AniLink>
      </div>
    </Layout>
  );
};

const query = graphql`
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
    image3: file(relativePath: { eq: "projects/image-6.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image4: file(relativePath: { eq: "projects/image-4.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image5: file(relativePath: { eq: "projects/image-5.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    image6: file(relativePath: { eq: "projects/image-3.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default ProjectsPage;
