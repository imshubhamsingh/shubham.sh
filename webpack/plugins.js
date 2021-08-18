const webpack = require('webpack');
const { extractProjectMetaData } = require('./lib/meta');

function getWebpackDefinePlugin() {
  return [
    new webpack.DefinePlugin({
      PROJECT_LIST: JSON.stringify(extractProjectMetaData()),
    }),
  ];
}

function getPlugins() {
  return [...getWebpackDefinePlugin()];
}

module.exports = {
  getPlugins,
};
