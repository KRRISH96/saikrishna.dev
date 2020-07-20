import React from "react";
import PropTypes from "prop-types";

const BlogPostMeta = ({ readingTime, date }) => (
  <p className="blog-post__meta">
    <span role="img" aria-label="clock">
      {"⏱ "}
    </span>
    {readingTime.text}
    <span role="img" aria-label="calender">
      {" 🗓 "}
    </span>
    {date}
  </p>
);

BlogPostMeta.propTypes = {
  readingTime: PropTypes.shape({
    text: PropTypes.string.isRequired,
  }).isRequired,
  date: PropTypes.string.isRequired,
};

export default BlogPostMeta;
