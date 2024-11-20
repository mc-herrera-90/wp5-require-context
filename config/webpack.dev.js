const { merge } = require('webpack-merge');
const common = require('./webpack.common');

/** @type {import('webpack').Configuration} */
const devConfig = {
  mode: 'development',
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
    ],
  },
  devServer: {
    hot: true,
    open: true,
    port: 4000,
  }
};

module.exports = merge(common, devConfig);