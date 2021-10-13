import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Tags from "../presentational/tags";
import ExternalLink from "../presentational/externalLink";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import "./index.scss";

const ProjectCard = ({
  project: { id, name, description, links, tags, image },
}) => (
  <div key={id} className="card project-card">
    <GatsbyImage
      image={getImage(image)}
      alt={`${name} Project Image`}
      className="project-card__image"
    />
    <div className="project-card__details">
      <h4 className="project-card__title">
        {!!links.live ? (
          <ExternalLink
            href={links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__link-live"
          >
            {name}
            <span className="icon">
              <FaExternalLinkAlt />
            </span>
          </ExternalLink>
        ) : (
          name
        )}
      </h4>
      {!!links.github && (
        <ExternalLink href={links.github} className="project-card__link-github">
          <FaGithub />
        </ExternalLink>
      )}
      <Tags tags={tags} />
      <p className="project-card__description">{description}</p>
    </div>
  </div>
);

export default ProjectCard;
