import React, { useState, useEffect } from "react";
import Image from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";

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

  const add = transform ? "btn-slide" : "";

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
                <AniLink fade to="/contact" className={`btn contact-me`}>
                  contact me
                </AniLink>
              </div>
            </div>
            <SocialLinks />
          </div>
        </article>
        <Image fluid={fluid} className="hero-img" />
      </div>
      <AniLink fade to="/contact" className={`btn btn-transform ${add}`}>
        <HiOutlineMail size={50} />
      </AniLink>
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
