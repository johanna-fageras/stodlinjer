// Allow overriding the deployed subfolder. Default to GitHub Pages project path, set PATH_PREFIX=/ for root/custom domain.
const pathPrefix = (process.env.PATH_PREFIX || '/stodlinjer').replace(/\/?$/, '/');
const baseUrl = pathPrefix === '/' ? '' : pathPrefix.replace(/\/$/, '');

module.exports = function (eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy('src/assets');
  eleventyConfig.addPassthroughCopy({ 'src/_data': 'data' });

  // Make baseUrl available in templates
  eleventyConfig.addGlobalData('baseUrl', baseUrl);

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
