import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { grretByTimeOfDay } from "../helpers/utils";
import Navigation from "../components/navigation";

const IndexPage = () => (
  <Layout isHomePage>
    <SEO title="Portfolio" />
    <div className="home-page">
      <p className="greeting">{grretByTimeOfDay()}</p>
      <h1 className="intro">I'm Sai</h1>
      <p className="tagline">A Self-Taught and Passionate Frontend Engineer</p>
      <Navigation isHomePage />
    </div>
  </Layout>
);

export default IndexPage;
