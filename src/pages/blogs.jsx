import React, { Fragment } from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

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
          {blogs.map(({node: blog}) => (
            <div className={blog.id}>
            <h1>
              {blog.frontmatter.title} ({blog.frontmatter.date})
              -
              {blog.fields.readingTime.text}
            </h1>
            <p>{blog.frontmatter.description}</p>
            or this
            <p>{blog.excerpt}</p>
            <Link to={blog.frontmatter.path}>Read</Link>
            </div>
          )
          )}
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
`
