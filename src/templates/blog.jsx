import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark;
  const { previous, next } = pageContext;

  return (
    <Layout location={location} title={"Blogs"}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <div className="blog-post-page">
        <h1 className="page-title">Blogs</h1>
        <div className="blog-post-container">
          <article>
            <header>
              <h1>{post.frontmatter.title}</h1>
              <p>{post.frontmatter.date}</p>
              <p>{post.fields.readingTime.text}</p>
            </header>
            <section dangerouslySetInnerHTML={{ __html: post.html }} />
            <hr />
          </article>

          <nav className="card other-blog-posts">
            Other Blog Posts
            <ul>
              <li>
                {previous && (
                  <Link to={previous.frontmatter.path} rel="prev">
                    <span role="img" aria-label="hand-with-pen">
                      {"✍🏻 "}
                    </span>
                    {previous.frontmatter.title}
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link to={next.frontmatter.path} rel="next">
                    <span role="img" aria-label="hand-with-pen">
                      {"✍🏻 "}
                    </span>
                    {next.frontmatter.title}
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        keywords
      }
      fields {
        slug
        readingTime {
          text
        }
      }
    }
  }
`;
