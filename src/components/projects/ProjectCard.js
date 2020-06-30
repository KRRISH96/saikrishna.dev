import React from "react";
import Img from "gatsby-image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import "./styles.scss";

const ProjectCard = ({
  project: { id, name, description, links, tags, image },
}) => (
  <div key={id} className="project-card">
    <Img
      fluid={image.childImageSharp.fluid}
      alt={`${name} Project Image`}
      className="project-card__image"
    />
    <div className="project-card__details">
      <h4 className="project-card__title">
        {!!links.live ? (
          <a
            href={links.live}
            target="_blank"
            rel="noopener noreferer"
            className="project-card__link-live"
          >
            {name}
            <span className="icon">
              <FaExternalLinkAlt />
            </span>
          </a>
        ) : (
          name
        )}
      </h4>
      {!!links.github && (
        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferer"
          className="project-card__link-github"
        >
          <FaGithub />
        </a>
      )}
      <p className="project-card__description">{description}</p>
      <ul className="project-card__tags">
        {tags.map(tag => (
          <li key={tag} className={`tag-${tag}`}>
            {tag}
          </li>
        ))}
      </ul>
    </div>
  </div>
);
export default ProjectCard;
