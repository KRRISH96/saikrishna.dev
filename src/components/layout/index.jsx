/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";

import Theme from "../theme";
import Navigation from "../navigation";
import { FaRocket } from "react-icons/fa";
import { Link } from "gatsby";
import Emoji from "../presentational/emoji";

const Layout = ({ children, isHomePage }) => (
  <>
    {!isHomePage && (
      <header>
        <Link to="/" className="rocket">
          <FaRocket />
        </Link>
        <Navigation />
      </header>
    )}
    <main className="container">
      <div className={`planet ${!isHomePage ? "small" : ""}`}></div>
      <div className="stars">
        {Array(10)
          .fill()
          .map((_e, i) => (
            <span className="star" key={`star-${i}`}></span>
          ))}
      </div>
      {children}
      <Theme />
    </main>
    <footer>
      © {new Date().getFullYear()}, Made with
      <Emoji label="heart" emoji={" ❤️ "} />
      by Sai Krishna Prasad Kandula.
    </footer>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isHomePage: PropTypes.bool,
};

Layout.defaultProps = {
  isHomePage: false,
};

export default Layout;
