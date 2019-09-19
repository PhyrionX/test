const HtmlWebPackPlugin = require("html-webpack-plugin");
const { rules: scssRules, plugin: extractPlugin } = require('build-tools-webpack-sass/extract');

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      ...scssRules
    ]
  },
  plugins: [htmlPlugin]
};