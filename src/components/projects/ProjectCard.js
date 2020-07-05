import React from "react";
import Img from "gatsby-image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import "./styles.scss";

const ProjectCard = ({
  project: { id, name, description, links, tags, image },
}) => (
  <div key={id} className="project-card">
    <Img
      fixed={image.childImageSharp.fixed}
      alt={`${name} Project Image`}
      className="project-card__image"
    />
    <div className="project-card__details">
      <h4 className="project-card__title">
        {!!links.live ? (
          <a
            href={links.live}
            target="_blank"
            rel="noopener noreferrer"
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
          rel="noopener noreferrer"
          className="project-card__link-github"
        >
          <FaGithub />
        </a>
      )}
      <ul className="tags">
        {tags.map(tag => (
          <li key={tag} className={`tag tag_${tag}`}>
            {tag}
          </li>
        ))}
      </ul>
      <p className="project-card__description">{description}</p>
    </div>
  </div>
);
export default ProjectCard;
