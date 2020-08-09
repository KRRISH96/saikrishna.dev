import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import BlogPostMeta from "../components/presentational/blogPostMeta";
import ExternalLink from "../components/presentational/externalLink";
import { APP_ROUTES } from "../helpers/constants";

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const { frontmatter, fields, excerpt, html } = data.markdownRemark;
  const { previous, next } = pageContext;
  const coverImagePath = frontmatter.coverImage.childImageSharp.fixed.src;

  const metaData = [
    {
      name: `keywords`,
      content: frontmatter.keywords,
    },
    {
      name: `og:image:alt`,
      content: "Blog Cover Image",
    },
    {
      name: `twitter:label1`,
      content: "Reading Time",
    },
    {
      name: `twitter:data1`,
      content: fields.readingTime.text,
    },
    {
      name: `twitter:image:alt`,
      content: "Blog Cover Image",
    },
    {
      name: `article:published_time`,
      content: frontmatter.date,
    },
    {
      name: "monetization",
      content: "$ilp.uphold.com/k2RRDxGXJdiX",
    },
  ];

  const gitHubEditUrl = `https://github.com/KRRISH96/saikrishna.dev/edit/master/content/blogs${fields.slug}index.md`;

  return (
    <Layout location={location} title={"Blogs"}>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description || excerpt}
        meta={metaData}
        canonicalUrl={frontmatter.canonicalUrl || null}
        image={coverImagePath}
        isLargeSummary
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

        <ul>
          <li>
            <ExternalLink href={gitHubEditUrl}>Edit on GitHub</ExternalLink>
          </li>
        </ul>

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
            <li>
              <Link to={APP_ROUTES.blogs} rel="all">
                View All
              </Link>
            </li>
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
        coverImage {
          childImageSharp {
            fixed {
              src
            }
          }
        }
        canonicalUrl
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
