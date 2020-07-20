import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ProjectCard from "../components/projects/ProjectCard";
import Emoji from "../components/presentational/emoji";

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
        <h1 className="page-title">
          Projects
          <Emoji label="Laptop" emoji={" 💻 "} />
        </h1>
        <div className="projects-container">
          {projectsList.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="banner">
          <p>
            More on&nbsp;
            <a
              href="https://github.com/KRRISH96"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            . Also, I do enjoy writing tiny bits and pieces of code when bored.
          </p>
          <p>
            Check them out on&nbsp;
            <a
              href="https://codepen.io/saikrrish"
              target="_blank"
              rel="noopener noreferrer"
            >
              Codepen
            </a>
            &nbsp;and&nbsp;
            <a
              href="https://repl.it/@KRRISH96"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repl.it
            </a>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectsPage;
