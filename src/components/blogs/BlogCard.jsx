import React from "react";
import Tags from "../tags";
import { Link } from "gatsby";
import "./index.scss";

const BlogCard = ({ blog: { id, frontmatter, fields } }) => (
  <div key={id} className="card blog-card">
    <h3 className="blog-card__title">
      <Link to={frontmatter.path}>{frontmatter.title}</Link>
    </h3>
    <p className="blog-card__meta">
      <span role="img" aria-label="clock">
        {"⏱ "}
      </span>
      {fields.readingTime.text}
      <span role="img" aria-label="calender">
        {" 🗓 "}
      </span>
      {frontmatter.date}
    </p>
    <p className="blog-card__description">{frontmatter.description}</p>
    <Tags tags={frontmatter.tags} />
  </div>
);

export default BlogCard;
