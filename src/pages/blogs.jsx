import React, { Fragment } from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import BlogCard from "../components/blogs/BlogCard";

const BlogsPage = ({
  data: {
    allMarkdownRemark: { edges: blogs },
  },
}) => {
  return (
    <Layout>
      <SEO title="Blogs" />
      <div className="blogs-page">
        <h1 className="page-title">Blogs</h1>
        <div className="blogs-container">
          {blogs.map(({ node: blog }) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default BlogsPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            path
            description
            tags
          }
          fields {
            slug
            readingTime {
              text
            }
          }
        }
      }
    }
  }
`;
