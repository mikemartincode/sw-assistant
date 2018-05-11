var path = require("path");
var webpack = require("webpack");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
// Adapted from https://github.com/TypeStrong/ts-loader/blob/master/examples/react-hot-boilerplate/package.json
module.exports = {
  mode: "development",
  context: path.resolve(__dirname, "../../"),
  entry: [
    "react-hot-loader/patch",
    // activate HMR for React
    "webpack-dev-server/client?http://localhost:1234",
    "webpack/hot/only-dev-server",
    "./src/index.tsx"
    // the entry point of our app
  ],

  output: {
    filename: "bundle.js",
    // the output bundle

    path: path.resolve(__dirname, "dist"),

    publicPath: "/static/"
    // necessary for HMR to know where to load the hot update chunks
  },

  devtool: "inline-source-map",

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{ loader: "ts-loader", options: { happyPackMode: true } }],
        exclude: /node_modules/
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          "file-loader?hash=sha512&digest=hex&name=img/[hash].[ext]",
          "image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false"
        ]
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } },
          "postcss-loader"
        ]
      },
      {
        test: /\.scss$/,
        loaders: [
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } },
          "postcss-loader",
          "sass-loader"
        ]
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates

    new webpack.NoEmitOnErrorsPlugin(),
    // do not emit compiled assets that include errors

    new ForkTsCheckerWebpackPlugin({
      tslint: true,
      checkSyntacticErrors: true,
      watch: ["../../src"] // optional but improves performance (fewer stat calls)
    })
  ],

  devServer: {
    host: "localhost",
    port: 1234,

    hot: true
    // enable HMR on the server
  },

  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  }
};
