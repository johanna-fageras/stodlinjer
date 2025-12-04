// Path prefix for GitHub Pages deployment
// When deploying to github.io/stodlinjer/, set pathPrefix to '/stodlinjer'
// For local development or custom domains, use '/'
const pathPrefix = process.env.ELEVENTY_PATH_PREFIX || '/stodlinjer';

module.exports = function (eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy({ 'src/assets': 'assets' });
  eleventyConfig.addPassthroughCopy({ 'src/_data': 'data' });

  // Make pathPrefix available in templates as a global variable
  // For GitHub Pages: baseUrl = '/stodlinjer'
  // For root deployment: baseUrl = '' (empty string)
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
