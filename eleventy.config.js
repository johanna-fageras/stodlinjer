// Path prefix configuration for GitHub Pages
// Default: '/stodlinjer' for GitHub Pages deployment
// Override with ELEVENTY_PATH_PREFIX=/ for local development

const pathPrefix = (() => {
  // Check if explicitly set via environment
  if (process.env.ELEVENTY_PATH_PREFIX !== undefined) {
    return process.env.ELEVENTY_PATH_PREFIX;
  }
  // Default to GitHub Pages path
  return '/stodlinjer';
})();

module.exports = function (eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy({ 'src/assets': 'assets' });
  eleventyConfig.addPassthroughCopy({ 'src/_data': 'data' });

  // Make pathPrefix available in templates as a global variable
  const baseUrl = pathPrefix === '/' ? '' : pathPrefix;
  eleventyConfig.addGlobalData('baseUrl', baseUrl);
  
  // Debug: log what's being used
  console.log(`[Eleventy Config] pathPrefix: "${pathPrefix}", baseUrl: "${baseUrl}"`);

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
