const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");

const clientConfig = {
  entry: "./src/client/client.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["source-map-loader"],
        exclude: "/node_modules/",
        enforce: "pre"
      }
    ]
  },
  devtool: "eval-source-map"
};

module.exports = merge(baseConfig, clientConfig);
