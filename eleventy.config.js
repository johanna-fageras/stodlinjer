const isLocal = process.env.LOCAL === '1';
const pathPrefix = isLocal ? '/' : '/stodlinjer/';

module.exports = function (eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy('src/assets');
  eleventyConfig.addPassthroughCopy({ 'src/_data': 'data' });

  // Make baseUrl available in templates
  eleventyConfig.addGlobalData('baseUrl', isLocal ? '' : '/stodlinjer');

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
