/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Theme from "./theme";
import Navigation from "./navigation";
import "./layout.scss";

const Layout = ({ children, isHomePage }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="container">
      {!isHomePage && (
        <header>
          <Navigation />
        </header>
      )}
      <main>
        <div className={`moon ${!isHomePage ? "small" : ""}`}></div>
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
        © {new Date().getFullYear()}, Made with ❤️ by Sai Krishna Prasad
        Kandula.
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isHomePage: PropTypes.bool,
};

Layout.defaultProps = {
  isHomePage: false,
};

export default Layout;
