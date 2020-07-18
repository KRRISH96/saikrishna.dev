module.exports = {
  siteMetadata: {
    title: `Sai Krishna Prasad Kandula`,
    description: `Self-Taught and Passionate Frontend Developer skilled in ReactJS, JavaScript, Ruby, Ruby on Rails, HTML5, CSS3, SASS, GIT.`,
    author: `@sai_krrishhh`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static`,
        path: `${__dirname}/static`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sai Krishna Prasad K`,
        short_name: `Sai`,
        start_url: `/`,
        background_color: `#0D1219`,
        theme_color: `#0D1219`,
        display: `minimal-ui`,
        icon: `static/profile_picture.jpg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
  ],
};
