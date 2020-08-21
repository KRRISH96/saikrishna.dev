import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { APP_ROUTES, BLOG_SITE } from "../helpers/constants";
import ExternalLink from "./presentational/externalLink";
import { FaExternalLinkAlt } from "react-icons/fa";

const Navigation = ({ isHomePage }) => (
  <nav>
    <ul className={`navigation ${!isHomePage ? "top-nav" : ""}`}>
      <li>
        <small className="external-link-icon">
          <FaExternalLinkAlt />
        </small>
        <ExternalLink href={BLOG_SITE}>Blog</ExternalLink>
      </li>
      {Object.keys(APP_ROUTES).map(route => (
        <li key={route}>
          <Link to={APP_ROUTES[route]} activeClassName="active" data-cy={route}>
            {route}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

Navigation.propTypes = {
  isHomePage: PropTypes.bool,
};

Navigation.defaultProps = {
  isHomePage: false,
};

export default Navigation;
