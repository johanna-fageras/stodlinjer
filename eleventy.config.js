// Default to GitHub Pages project path; override with ELEVENTY_PATH_PREFIX=/ for root/custom domains.
const pathPrefix = process.env.ELEVENTY_PATH_PREFIX || '/stodlinjer';

module.exports = function (eleventyConfig) {
  // Copy static assets (css, fonts, js) as-is to the output folder.
  eleventyConfig.addPassthroughCopy('src/assets');
  // Expose data files to the client for fetch requests (while still usable as Eleventy data).
  eleventyConfig.addPassthroughCopy({ 'src/_data': 'data' });

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
