const webpack =　require("webpack");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: __dirname + '/../../src/js/init/{@pagename}.js',
  output: {
      path: __dirname + '/../../src/js/app',
      filename: '{@pagename}.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: __dirname + '../../node_modules/',
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  },
  plugins: [
    new UglifyJsPlugin()
  ],
  target: "node"
};
