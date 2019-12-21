const withCSS = require("@zeit/next-css");
const withImages = require("next-images");
const withFonts = require("next-fonts");

/**
 * Next config
 */
module.exports = withFonts(
  withImages(
    withCSS({
      exportTrailingSlash: false,
      exportPathMap: function() {
        return {
          "/": { page: "/" },
        };
      },
    })
  )
);
