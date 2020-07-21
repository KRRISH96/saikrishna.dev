import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import BlogPostMeta from "../components/presentational/blogPostMeta";

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
        <article className="blog-post-container">
          <header className="blog-post__header">
            <h1 className="page-title blog-post__title">
              {post.frontmatter.title}
            </h1>
            <BlogPostMeta
              readingTime={post.fields.readingTime}
              date={post.frontmatter.date}
            />
          </header>
          <section
            className="blog-post__body"
            dangerouslySetInnerHTML={{ __html: post.html }}
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
