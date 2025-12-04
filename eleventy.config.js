// Allow overriding the deployed subfolder.
// Default to root ('/'); set PATH_PREFIX=/stodlinjer for GitHub project pages.
const pathPrefixEnv = process.env.PATH_PREFIX || '/';
const pathPrefix = pathPrefixEnv.endsWith('/') ? pathPrefixEnv : `${pathPrefixEnv}/`;
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
