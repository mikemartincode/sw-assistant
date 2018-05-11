// development config
const merge = require("webpack-merge");
const webpack = require("webpack");
const commonConfig = require("./common");
const Jarvis = require("webpack-jarvis");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const HardSourceWebpackPlugin = require("hard-source-webpack-plugin");

module.exports = merge(commonConfig, {
  mode: "development",
  entry: [
    "react-hot-loader/patch", // activate HMR for React
    "webpack-dev-server/client?http://localhost:1234", // bundle the client for webpack-dev-server and connect to the provided endpoint
    "webpack/hot/only-dev-server", // bundle the client for hot reloading, only- means to only hot reload for successful updates
    "./index.tsx" // the entry point of our app
  ],
  devServer: {
    hot: true, // enable HMR on the server
    port: 1234
  },
  devtool: "inline-source-map",
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // enable HMR globally
    new webpack.NamedModulesPlugin(), // prints more readable module names in the browser console on HMR updates
    new Jarvis({
      port: 1335 // optional: set a port
    })
    // new BundleAnalyzerPlugin({
    //   openAnalyzer: false
    // }),
    //new HardSourceWebpackPlugin() // introduces caching for subsequent builds.
  ]
});
