import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";

const ThankYouPage = () => (
  <Layout>
    <SEO title="Thank You" />
    <div className="thank-you-page">
      <h1 className="page-title">Thank You for the Message!</h1>
      <p>I will try to respond ASAP</p>
      <Link to="/">Home</Link>
    </div>
  </Layout>
);

export default ThankYouPage;
