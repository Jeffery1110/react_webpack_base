const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 9000,
    contentBase: './'
  },
  plugins: [
    new webpack.DefinePlugin({
      env: JSON.stringify('dev')
    })
  ]
});
