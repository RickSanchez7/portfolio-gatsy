import React, { useState, useEffect } from "react";
import Image from "gatsby-image";
import { graphql, Link, useStaticQuery } from "gatsby";

import { HiOutlineMail } from "react-icons/hi";

import SocialLinks from "../constants/socialLinks";

const Hero = () => {
  const [transform, setTransform] = useState(false);

  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query);

  useEffect(() => {
    const onScroll = () => {
      const scrollCheck = 300;
      if (window.scrollY > scrollCheck) {
        setTransform(true);
      } else {
        setTransform(false);
      }
    };

    // setting the event handler from web API
    document.addEventListener("scroll", onScroll);

    // cleaning up from the web API
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  const add = transform ? "btn-transform" : "";

  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>i'm ricardo</h1>
            <h4>web Developer</h4>
            <div className="button-container">
              <div className="contact-me-container">
                <Link to="/contact" className={`btn contact-me ${add}`}>
                  {transform ? <HiOutlineMail size={50} /> : "contact me"}
                </Link>
              </div>
            </div>
            <SocialLinks />
          </div>
        </article>
        <Image fluid={fluid} className="hero-img" />
      </div>
    </header>
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

export default Hero;
