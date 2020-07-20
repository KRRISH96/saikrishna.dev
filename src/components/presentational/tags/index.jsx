import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

const Tags = ({ tags }) => (
  <ul className="tags">
    {tags.map(tag => (
      <li key={tag} className={`tag tag_${tag}`}>
        {tag}
      </li>
    ))}
  </ul>
);

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Tags;
