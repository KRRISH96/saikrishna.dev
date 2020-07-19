/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require("path");
const { createFilePath } = require(`gatsby-source-filesystem`);

const projects = require("./content/projects/projects.json");

// Projects Nodes Creation
exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  projects.forEach(project => {
    const { name: projectName, description, image, links, tags } = project;
    const { name, ext } = path.parse(image);
    const absolutePath = `${__dirname}/static/${image}`;

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

// Create BLogs Pages
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPost = path.resolve(`./src/templates/blog.jsx`);
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
                readingTime {
                  text
                }
              }
              frontmatter {
                title
                path
              }
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  // Create blog pages.
  const blogs = result.data.allMarkdownRemark.edges;

  blogs.forEach((post, index) => {
    const previous = index === blogs.length - 1 ? null : blogs[index + 1].node;
    const next = index === 0 ? null : blogs[index - 1].node;

    createPage({
      path: `blogs${post.node.fields.slug}`,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    });
  });
};

// After create Hook to customize node
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
