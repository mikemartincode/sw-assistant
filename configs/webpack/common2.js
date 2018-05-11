// shared config (dev and prod)
const { resolve } = require("path");
const StyleLintPlugin = require("stylelint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HappyPack = require("happypack");
var ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

// Create a threadpool of 5 cores for our bundling
const happyThreadPool = HappyPack.ThreadPool({ size: 5 });

module.exports = {
  resolve: {
    extensions: [".ts", "json", ".tsx", ".js", ".jsx"]
  },
  context: resolve(__dirname, "../../src"),
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "happypack/loader?id=jsx",
        exclude: /node_modules/
      },
      {
        test: /\.tsx?$/,
        use: "happypack/loader?id=tsx",
        exclude: /node_modules/
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
        loaders: ["happypack/loader?id=styles"]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          "file-loader?hash=sha512&digest=hex&name=img/[hash].[ext]",
          "image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false"
        ]
      }
    ]
  },
  plugins: [
    new HappyPack({
      id: "jsx",
      threadPool: happyThreadPool,
      loaders: ["babel-loader", "source-map-loader"]
    }),
    new HappyPack({
      id: "tsx",
      threadPool: happyThreadPool,
      loaders: [
        "babel-loader",
        {
          path: "ts-loader",
          query: { happyPackMode: true }
        }
      ]
    }),
    new HappyPack({
      id: "styles",
      threadPool: happyThreadPool,
      loaders: [
        "style-loader",
        { loader: "css-loader", options: { importLoaders: 1 } },
        "postcss-loader",
        "sass-loader"
      ]
    }),
    new ForkTsCheckerWebpackPlugin({
      tsconfig: resolve("./tsconfig.json"),
      checkSyntacticErrors: true
    }),
    new StyleLintPlugin(),
    new HtmlWebpackPlugin({ template: "index.html.ejs" })
  ],
  performance: {
    hints: false
  }
};
