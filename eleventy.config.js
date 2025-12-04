// For GitHub Pages deployment at /stodlinjer/ subdirectory
// For local testing, open docs/index.html directly in browser
// For custom domain at root, set ELEVENTY_PATH_PREFIX=/

const pathPrefix = process.env.ELEVENTY_PATH_PREFIX || '/stodlinjer';

module.exports = function (eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy({ 'src/assets': 'assets' });
  eleventyConfig.addPassthroughCopy({ 'src/_data': 'data' });

  // Make pathPrefix available in templates
  eleventyConfig.addGlobalData('pathPrefix', pathPrefix);

  // Simple url filter - just ensures leading slash, doesn't add prefix
  // The <base> tag in head.njk handles the prefix
  eleventyConfig.addFilter('toAbsolute', function (url) {
    if (!url) return url;
    if (url.startsWith('http') || url.startsWith('//') || url.startsWith('#') || 
        url.startsWith('tel:') || url.startsWith('mailto:')) {
      return url;
    }
    return url.startsWith('/') ? url : '/' + url;
  });

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
