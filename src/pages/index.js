import React from "react";
import Hero from "../components/Hero";

import Layout from "../components/Layout";
import Projects from "../components/FeaturedProjects";
import { SEO } from "../components/Seo";

export default function Home() {
  return (
    <Layout>
      <SEO />
      <Hero />
      <Projects />
    </Layout>
  );
}
