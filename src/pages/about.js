import React from "react";
import Layout from "../components/Layout";
import Title from "../components/Title";
import Image from "gatsby-image";
import { stack } from "../constants/stack";
import { useStaticQuery, graphql } from "gatsby";
import { SEO } from "../components/Seo";
const About = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query);

  return (
    <Layout>
      <SEO
        title="About"
        description="Self-taught and passionate, with experience on fullstack web applications development."
      />
      <section className="about-page">
        <div className="section section-center about-center">
          <Image fluid={fluid} className="about-img" />
          <article className="about-text">
            <Title title="About me" />
            <p>
              Self-taught and passionate, with experience on fullstack web
              applications development.
            </p>
            <p>
              I started programming out of curiosity. That lead me into HTML,
              CSS & JS which eventually lead me to pursuit software development
              as a career path.
            </p>
            <Title title="Skills" />
            <div className="stack">
              {stack.map((item, i) => {
                return (
                  <span className="project-stack" key={i}>
                    {item}
                  </span>
                );
              })}
            </div>
          </article>
        </div>
      </section>
    </Layout>
  );
};

const query = graphql`
  {
    file(relativePath: { eq: "Avatar-Maker.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default About;
