const path = require("path");
const merge = require("webpack-merge");
const webpackNodeExternals = require("webpack-node-externals");
const baseConfig = require("./webpack.base");

const serverConfig = {
  target: "node",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, serverConfig);
