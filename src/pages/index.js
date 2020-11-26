import React from "react";
import Hero from "../components/Hero";

import Layout from "../components/Layout";
import Projects from "../components/FeaturedProjects";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Projects />
    </Layout>
  );
}
