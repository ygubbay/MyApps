const path = require('path');
var webpack = require('webpack');

const config = {
  devtool: 'source-map',
  entry: [
    './assets/js/my_script.js'
    ],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  //module: {
  //  rules: [
  //    {test: /\.(js|jsx)$/, use: 'babel-loader'}
  //  ]
  //},
  module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: ['babel-loader']
        }
        ]
  }/*,
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]*/,
  devServer: {
    inline: true,
    hot: true
  }
};

module.exports = config;