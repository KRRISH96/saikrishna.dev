import React from "react";
import { Link } from "gatsby";
import "./index.scss";

const BlogCard = ({ blog: { id, frontmatter, fields } }) => (
  <div key={id} className="card blog-card">
    <h3 className="blog-card__title">
      <Link to={frontmatter.path}>{frontmatter.title}</Link>
    </h3>
    <p className="blog-card__meta">
      <span role="img" aria-label="clock">
        ⏱&nbsp;
      </span>
      {fields.readingTime.text}
      <span role="img" aria-label="calender">
        &nbsp;🗓&nbsp;
      </span>
      {frontmatter.date}
    </p>
    <p className="blog-card__description">{frontmatter.description}</p>
    <ul className="tags">
      {frontmatter.tags.map(tag => (
        <li key={tag} className={`tag tag_${tag}`}>
          {tag}
        </li>
      ))}
    </ul>
  </div>
);

export default BlogCard;
