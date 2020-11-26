import React from "react";
import Layout from "../components/Layout";
import Title from "../components/Title";
import Image from "gatsby-image";
import { stack } from "../constants/stack";
import { useStaticQuery, graphql } from "gatsby";
const About = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query);

  return (
    <Layout>
      <section className="about-page">
        <div className="section section-center about-center">
          <Image fluid={fluid} className="about-img" />
          <article className="about-text">
            <Title title="About me" />
            <p>
              I love to code, solve problems with pure code and create something
              from nothing.
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
