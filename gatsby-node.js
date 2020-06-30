/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require("path");
const projects = require("./src/data/projects.json");

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  projects.forEach(project => {
    const { name: projectName, description, image, links, tags } = project;
    const { name, ext } = path.parse(image);
    const absolutePath = `${__dirname}/src/images/${image}`;

    const imageData = {
      name,
      ext,
      absolutePath,
      extension: ext.substring(1),
    };

    const imageNode = {
      ...imageData,
      id: createNodeId(`project-image-${name}`),
      internal: {
        type: "ProjectImage",
        contentDigest: createContentDigest(imageData),
      },
    };
    actions.createNode(imageNode);
    const node = {
      id: createNodeId(`Project-${name}`),
      name: projectName,
      description,
      image: imageNode,
      links,
      tags,
      internal: {
        type: "Project",
        contentDigest: createContentDigest(project),
      },
    };
    actions.createNode(node);
  });
};
