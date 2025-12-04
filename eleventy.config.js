// Default to GitHub Pages project path; override with ELEVENTY_PATH_PREFIX=/ for root/custom domains.
const pathPrefix = process.env.ELEVENTY_PATH_PREFIX || '/stodlinjer';

module.exports = function (eleventyConfig) {
  // Copy static assets (css, fonts, js) as-is to the output folder.
  // Note: The passthrough copy destination must NOT include pathPrefix - 
  // Eleventy handles that automatically for passthrough copies.
  eleventyConfig.addPassthroughCopy({ 'src/assets': 'assets' });
  
  // Expose data files to the client for fetch requests (while still usable as Eleventy data).
  eleventyConfig.addPassthroughCopy({ 'src/_data': 'data' });

  // Override the default url filter to ensure pathPrefix is always applied
  eleventyConfig.addFilter('url', function (url) {
    if (!url) return url;
    
    // If URL is already absolute (http/https) or a hash/tel/mailto link, return as-is
    if (url.startsWith('http') || url.startsWith('#') || url.startsWith('tel:') || url.startsWith('mailto:')) {
      return url;
    }
    
    // Normalize the URL to start with /
    let normalizedUrl = url.startsWith('/') ? url : '/' + url;
    
    // Apply pathPrefix
    if (pathPrefix && pathPrefix !== '/') {
      // Avoid double prefixing
      if (!normalizedUrl.startsWith(pathPrefix)) {
        normalizedUrl = pathPrefix + normalizedUrl;
      }
    }
    
    return normalizedUrl;
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
