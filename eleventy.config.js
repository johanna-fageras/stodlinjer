// pathPrefix: Set via environment variable
// - Local dev (npm run serve): Uses '/' (root)
// - GitHub Pages (npm run build): Uses '/stodlinjer'
const pathPrefix = process.env.ELEVENTY_PATH_PREFIX || '/';

module.exports = function (eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy({ 'src/assets': 'assets' });
  eleventyConfig.addPassthroughCopy({ 'src/_data': 'data' });

  // Make pathPrefix available in templates as a global variable
  eleventyConfig.addGlobalData('baseUrl', pathPrefix === '/' ? '' : pathPrefix);

  return {
    pathPrefix,
    dir: {
      input: 'src',
      output: 'docs'
    },
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    templateFormats: ['njk', 'html']
  };
};
