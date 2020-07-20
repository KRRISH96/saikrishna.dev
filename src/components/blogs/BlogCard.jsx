import React from "react";
import Tags from "../presentational/tags";
import { Link } from "gatsby";
import "./index.scss";
import BlogPostMeta from "../presentational/blogPostMeta";

const BlogCard = ({ blog: { id, frontmatter, fields } }) => (
  <div key={id} className="card blog-card">
    <h3 className="blog-card__title">
      <Link to={frontmatter.path}>{frontmatter.title}</Link>
    </h3>
    <BlogPostMeta readingTime={fields.readingTime} date={frontmatter.date} />
    <p className="blog-card__description">{frontmatter.description}</p>
    <Tags tags={frontmatter.tags} />
  </div>
);

export default BlogCard;
