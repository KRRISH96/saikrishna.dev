import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { APP_ROUTES } from "../helpers/constants";
import { Link } from "gatsby";

const NotFoundPage = () => (
  <Layout>
    <SEO title="Uh Oh! Looks like you are Lost in Space" />
    <h1>Uh Oh! Looks Like You are Lost in Space</h1>
    <p>
      Let's get you back to <Link to="/">Home</Link> Planet
    </p>
  </Layout>
);

export default NotFoundPage;
