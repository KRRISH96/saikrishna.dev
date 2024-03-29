import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { APP_ROUTES, BLOG_SITE } from "../helpers/constants";
import Emoji from "../components/presentational/emoji";
import ExternalLink from "../components/presentational/externalLink";
import { FaExternalLinkAlt } from "react-icons/fa";

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      profileImage: file(relativePath: { eq: "images/profile_picture.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 200, height: 200, placeholder: BLURRED)
        }
      }
    }
  `);
  return (
    <Layout>
      <SEO title="About" />
      <div className="about-page">
        <h1 className="page-title">
          Hey There
          <Emoji label="Waving Hand" emoji={"👋🏻"} />
        </h1>
        <div className="profile-image-container">
          <GatsbyImage
            image={getImage(data.profileImage)}
            alt="Sai's Profile Picture"
            className="profile-image"
          />
        </div>
        <p>I'm Sai Krishna Prasad, FullStack Web Developer from India.</p>
        <p>
          I architect and develop full stack web applications using React,
          JavaScript, and Ruby on Rails. I love converting mockups into pixel
          perfect technical implementations. I also like to stay on top of the
          latest trends and techniques by consuming podcasts, articles, videos,
          and mother google!
        </p>
        <p>
          When I’m not coding you can catch me cycling around Bangalore or
          cooking up some yummy Indian food!
        </p>
        <br />
        <ul>
          <li>
            <Emoji label="Waving Hand" emoji={" 👋🏻 "} />
            <Link to={APP_ROUTES.contact} data-cy={APP_ROUTES.contact}>
              Say Hello!
            </Link>
          </li>
          <li>
            <Emoji label="Writing Hand" emoji={" ✍🏻 "} />
            <ExternalLink href={BLOG_SITE}>Read My Blogs</ExternalLink>
            <small className="external-link-icon">
              <FaExternalLinkAlt />
            </small>
          </li>
          <li>
            <Emoji label="Laptop" emoji={" 💻 "} />
            <Link to={APP_ROUTES.projects} data-cy={APP_ROUTES.projects}>
              Some of My Work!
            </Link>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default AboutPage;
