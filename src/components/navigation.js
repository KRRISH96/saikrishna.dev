import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { APP_ROUTES } from "../helpers/constants";

const Navigation = ({ isHomePage }) => (
  <ul className={`navigation ${!isHomePage ? "top-nav" : ""}`}>
    {Object.keys(APP_ROUTES).map(route => (
      <li key={route}>
        <Link to={APP_ROUTES[route]} activeClassName="active">
          {route}
        </Link>
      </li>
    ))}
  </ul>
);

Navigation.propTypes = {
  isHomePage: PropTypes.bool,
};

Navigation.defaultProps = {
  isHomePage: false,
};

export default Navigation;
