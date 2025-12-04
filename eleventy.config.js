// Set to '/stodlinjer' for GitHub Pages, or '/' for custom domain/local
const isProduction = process.env.NODE_ENV === 'production' || process.env.ELEVENTY_PATH_PREFIX;
const pathPrefix = process.env.ELEVENTY_PATH_PREFIX || (isProduction ? '/stodlinjer' : '/');

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
