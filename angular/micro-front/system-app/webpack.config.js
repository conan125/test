const path = require("path");
const HtmlWebpack = require("html-webpack-plugin");
module.exports = () => {
  return {
    mode: "production",

    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
      libraryTarget: "system",
      publicPath: "./",
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: { loader: "babel-loader" },
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [new HtmlWebpack({ template: "src/public/index.html" })],

    externals: ["react", "react-dom"],
  };
};
