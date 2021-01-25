const autoprefixer = require('autoprefixer');
const postcssImport = require('postcss-import');
const url = require('postcss-url');

module.exports = {
  plugins: [postcssImport, url, autoprefixer],
};
