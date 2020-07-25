import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import BlogPostMeta from "../components/presentational/blogPostMeta";

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const { frontmatter, fields, excerpt, html } = data.markdownRemark;
  const { previous, next } = pageContext;

  const metaData = [
    {
      name: `keywords`,
      content: frontmatter.keywords,
    },
    {
      name: `twitter:label1`,
      content: "Reading Time",
    },
    {
      name: `twitter:data1`,
      content: frontmatter.readingTime,
    },
    {
      name: `article:published_time`,
      content: frontmatter.date,
    },
  ];

  return (
    <Layout location={location} title={"Blogs"}>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description || excerpt}
        meta={metaData}
      />
      <div className="blog-post-page">
        <article className="blog-post-container">
          <header className="blog-post__header">
            <h1 className="page-title blog-post__title">{frontmatter.title}</h1>
            <BlogPostMeta
              readingTime={fields.readingTime}
              date={frontmatter.date}
            />
          </header>
          <section
            className="blog-post__body"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <hr />
        </article>

        <nav className="card other-blog-posts">
          Other Blog Posts
          <ul className="other-blog-posts__list">
            {previous && (
              <li>
                <Link to={previous.frontmatter.path} rel="prev">
                  {previous.frontmatter.title}
                </Link>
              </li>
            )}
            {next && (
              <li>
                <Link to={next.frontmatter.path} rel="next">
                  {next.frontmatter.title}
                </Link>
              </li>
            )}
          </ul>
        </nav>
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
`;
