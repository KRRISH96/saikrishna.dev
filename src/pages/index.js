import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { grretByTimeOfDay } from "../helpers/utils";

const IndexPage = () => (
  <Layout isHomePage>
    <SEO title="Home" />
    <div className="home-page">
      <p className="greeting">{grretByTimeOfDay()}</p>
      <h1 className="intro">I'm Sai</h1>
      <p className="tagline">A Self-Taught and Passionate Frontend Engineer</p>
    </div>
  </Layout>
);

export default IndexPage;
