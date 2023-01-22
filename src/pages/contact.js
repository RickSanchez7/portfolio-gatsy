import React from "react";
import {
  FaGithub,
  FaRegEnvelope,
  FaUserAlt,
  FaLinkedin,
  FaGlobeAfrica,
  FaNewspaper,
} from "react-icons/fa";

import Layout from "../components/Layout";
import { SEO } from "../components/Seo";
import Title from "../components/Title";

const contact = () => {
  return (
    <Layout>
      <SEO title="Contacts" description="Here you have my contacts" />
      <section className="contact-page">
        <div className="contact-center">
          <Title title="Contact" />
          <div className="contact">
            <FaUserAlt />
            <p>Ricardo Jorge Barbosa Costa</p>
          </div>
          <div className="contact">
            <FaRegEnvelope />
            <p>ricardobcosta17@hotmail.com</p>
          </div>
          <div className="contact">
            <FaGlobeAfrica />
            <p>Porto</p>
          </div>
          <div className="contact">
            <FaLinkedin />
            <a
              href="https://www.linkedin.com/in/ricardo-costa-973b92188/"
              rel="noreferrer"
              target="_blank"
            >
              https://www.linkedin.com/in/ricardo-costa-973b92188/
            </a>
          </div>
          <div className="contact">
            <FaGithub />
            <a
              href="https://github.com/RickSanchez7"
              rel="noreferrer"
              target="_blank"
            >
              https://github.com/RickSanchez7
            </a>
          </div>
          <div className="contact">
            <FaNewspaper />
            <a
              href="https://drive.google.com/file/d/1mGXzRRvlfPWSGnOJytBbLjGv5kpPX9nf/view?usp=sharing"
              rel="noreferrer"
              target="_blank"
            >
              Curriculum
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default contact;
