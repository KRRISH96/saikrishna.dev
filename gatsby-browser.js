/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

require("./src/components/layout/index.scss");

// Reload on service worker updates
// Ref: https://github.com/gatsbyjs/gatsby/issues/9087#issuecomment-459105021
export const onServiceWorkerUpdateReady = () => window.location.reload(true);
