import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { grretByTimeOfDay } from "../helpers/utils";

const IndexPage = () => (
  <Layout hideHeader>
    <SEO title="Home" />
    <h1>{grretByTimeOfDay()}</h1>
    <p>Welcome to your new Gatsby site.</p>
  </Layout>
);

export default IndexPage;
