/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import "./layout.scss";
import Theme from "./theme";

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
    <>
      {!isHomePage && <Header siteTitle={data.site.siteMetadata.title} />}
      <div className="container">
        <main>
          <div className={`moon ${!isHomePage ? "small" : ""}`}></div>
          {children}
          <Theme />
        </main>
        <footer>
          © {new Date().getFullYear()}, Made with ❤️ by Sai Krishna Prasad
          Kandula.
        </footer>
      </div>
    </>
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
