/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const projects = require("./src/data/projects.json");

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  projects.forEach(project => {
    const { name, description, imageSrc, links, tags } = project;
    const node = {
      id: createNodeId(`Pokemon-${name}`),
      name,
      description,
      imageSrc,
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
