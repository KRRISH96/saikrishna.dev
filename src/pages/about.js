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
          I'm Sai Krishna Prasad, Frontend Engineer from India. I started programming back in February 2018 to come out of a
          month-long depression I was in, due to a failed attempt in pursuing my
          childhood dream. Since then I didn't look back. If I can do it, you can too!
        </p>
        <p>
          I architect and develop Web Applications using ReactJs, JavaScript, Ruby on Rails, HTML, CSS, SASS and various other add-on tools and libraries. Pixel perfect technical implementations is what fuels me. My knowledge resources include documentaries, podcasts, articles and mother google!
        </p>
        <p>
          Cycling and cooking are my best friends while not coding.
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
