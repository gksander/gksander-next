const withCSS = require("@zeit/next-css");
const withImages = require("next-images");

/**
 * Next config
 */
module.exports = withImages(
  withCSS({
    exportTrailingSlash: false,
    exportPathMap: function() {
      return {
        "/": { page: "/" },
      };
    },
  })
);
