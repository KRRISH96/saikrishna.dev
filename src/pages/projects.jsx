import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ProjectCard from "../components/projects/ProjectCard";
import Emoji from "../components/presentational/emoji";
import ExternalLink from "../components/presentational/externalLink";
import { PROFILE_LINKS } from "../helpers/constants";

const ProjectsPage = () => {
  const {
    allProjectsJson: { edges: projectsList},
  } = useStaticQuery(graphql`
    query {
      allProjectsJson {
        edges {
          node {
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
                gatsbyImageData(layout: FIXED, width: 352, height: 176, placeholder: BLURRED)
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
          {projectsList.map(({node: project}) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="banner">
          <p>
            More on&nbsp;
            <ExternalLink href={PROFILE_LINKS.github}>GitHub</ExternalLink>.
            Also, I do enjoy writing tiny bits and pieces of code when bored.
          </p>
          <p>
            Check them out on&nbsp;
            <ExternalLink href={PROFILE_LINKS.codepen}>Codepen</ExternalLink>
            &nbsp;and&nbsp;
            <ExternalLink href={PROFILE_LINKS.repl}>Repl.it</ExternalLink>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectsPage;
