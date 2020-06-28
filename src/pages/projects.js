import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import SEO from "../components/seo";

const ProjectsPage = ({data}) => {
  
console.log(data)
  return (
    <Layout>
      <SEO title="Projects" />
      <div className="about-page">
        <h1 className="page-title">
          Projects
        </h1>
      </div>
    </Layout>
  );
};


export const projects = useStaticQuery(graphql`
  query {
    allProject {
      nodes {
        id
        name
        description
        links {
          live
          github
        }
        tags
        image {
          childImageSharp {
            fluid(maxWidth: 384) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`);

export default ProjectsPage;