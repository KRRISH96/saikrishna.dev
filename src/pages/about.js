import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import SEO from "../components/seo";

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      profileImage: file(relativePath: { eq: "profile_picture.jpg" }) {
        childImageSharp {
          fixed(width: 200, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <SEO title="About" />
      <div className="about-page">
      <div className="profile-image-container">
        <Img
          fixed={data.profileImage.childImageSharp.fixed}
          alt="Sai's Profile Picture"
          className="profile-image"
        />
      </div>
        <p>First Para</p>
        <p>Second Para</p>
        <div>Links</div>
      </div>
    </Layout>
  );
};

export default AboutPage;
