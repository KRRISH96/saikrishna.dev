import React from "react";
import PropTypes from "prop-types";
import Emoji from "./emoji";

const BlogPostMeta = ({ readingTime, date }) => (
  <p className="blog-post__meta">
    <Emoji label="clock" emoji={"⏱ "} />
    {readingTime.text}
    <Emoji label="calender" emoji={" 🗓 "} />
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
