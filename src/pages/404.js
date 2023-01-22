import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Layout from "../components/Layout";
import { SEO } from "../components/Seo";

const Error = () => {
  return (
    <Layout>
      <SEO description="Wrong turn" />
      <main className="error-page">
        <div className="error-container">
          <h1>oops it's a dead end</h1>
          <AniLink fade to="/" className="btn">
            back home
          </AniLink>
        </div>
      </main>
    </Layout>
  );
};

export default Error;
