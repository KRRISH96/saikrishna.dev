import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import NotFoundSVG from "../components/presentational/NotFoundSVG";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404 | Uh Oh! Looks like you are Lost in Space" />
    <div className="not-found-page">
      <h1 className="page-title">Uh Oh! Looks Like You are Lost in Space</h1>
      <div className="four-o-four">
        <span>4</span>
        <span className="illustration">
          <NotFoundSVG />
        </span>
        <span>4</span>
      </div>
      <p>
        That's enough spacewalk. Let's get you back to the{" "}
        <Link to="/">base</Link>
      </p>
    </div>
  </Layout>
);

export default NotFoundPage;
