// const purgecss = require("@fullhuman/postcss-purgecss")({
//   // Specify the paths to all of the template files in your project
//   content: [
//     "./pages/*.tsx",
//     "./components/*.tsx",
//     // etc.
//   ],
//
//   whitelist: ["svg:not(:root).svg-inline--fa"],
//   whitelistPatterns: [/^fa-/, /^svg-inline--fa/],
//   whitelistPatternsChildren: [/^token/, /^pre/, /^code/],
//   defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
// });

module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    // ...(/production/i.test(process.env.NODE_ENV) ? [purgecss] : []),
  ],
};
