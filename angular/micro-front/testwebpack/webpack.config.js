const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "src/public/",
  },
  // resolve: {
  //   extensions: [".json", ".js", ".vue", ".css"],
  //   alias: {
  //     // vue$: "vue/dist/vue.esm.js",
  //   },
  // },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: ["vue-style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.png/,
        type: "asset",
      },
      {
        test: /\.js$/,
        use: { loader: "babel-loader" },
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/public/index.html" })],
};
