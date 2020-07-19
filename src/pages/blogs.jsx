import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const BlogsPage = () => {
  return (
    <Layout>
      <SEO title="Blogs" />
      <div className="blogs-page">
        <h1 className="page-title">Blogs</h1>
        <div className="blogs-container">BLOGS LIST HERE</div>
      </div>
    </Layout>
  );
};

export default BlogsPage;
