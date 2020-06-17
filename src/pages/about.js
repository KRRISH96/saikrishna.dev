import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { APP_ROUTES } from "../helpers/constants";

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
        <h1 className="page-title">Namaste 🙏🏼</h1>
        <div className="profile-image-container">
          <Img
            fixed={data.profileImage.childImageSharp.fixed}
            alt="Sai's Profile Picture"
            className="profile-image"
          />
        </div>
        <p>
          I'm Sai Krishna Prasad, Frontend Engineer based out of Tirupathi,
          India. I started programming back in Febrauray 2018 to come out of a
          month-long depression I was in, due to a failed attempt in pursuing my
          childhood dream. Since then I didn't turn back,
        </p>
        <p>
          Cycling and cooking are my best friends while not coding. I also enjoy
          listening to pleasant music on Spotify. Watching documentaries and
          listening podcasts are another source of knowledge apart from reading
          articles and exploring the internet.
        </p>
        <br />
        <ul>
          <li>
            <Link to={APP_ROUTES.contact}>🤗 Say Hello!</Link>
          </li>
          <li>
            <Link to={APP_ROUTES.blogs}>📝 Blogs</Link>
          </li>
          <li>
            <Link to={APP_ROUTES.projects}>💻 Projects</Link>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default AboutPage;
