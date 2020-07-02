import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ProjectCard from "../components/projects/ProjectCard";

const ProjectsPage = () => {
  const {
    allProject: { nodes: projectsList },
  } = useStaticQuery(graphql`
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
              fixed(width: 352, height: 176) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Projects" />
      <div className="projects-page">
        <h1 className="page-title">Projects</h1>
        <div className="projects-container">
          {projectsList.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProjectsPage;
