const baseConfig = require('./webpack.base.config.js');
const HtmlWebbpackPlugin = require('html-webpack-plugin'); // eslint-disable-line

baseConfig.devtool = 'cheap-module-source-map';
baseConfig.plugins = [
  new HtmlWebbpackPlugin({
    title: 'Shrimp',
    template: 'index.ejs'
  })
];
module.exports = baseConfig;
