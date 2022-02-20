const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const resolve = path.resolve;

module.exports = {
  mode: "development",
  // mode: "production",
  entry: "./src/index.js",
  output: {
    path: resolve(__dirname, "dist"),
    filename: "[name].[chunkhash:5].js",
    chunkFilename: "[name].[chunkhash:5].js",
    clean: true,
    publicPath: "/",
    // library: {
    //   // name: "Test",
    //   libraryTarget: "umd",
    //   // type: "module",
    //   // umdNamedDefine: true,
    // },
  },
  devServer: {
    contentBase: resolve(__dirname, "dist"),
    compress: true,
    port: 8080,
    open: true,
  },
  experiments: {
    outputModule: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `./public/index.html`,
      filename: `index.html`,
    }),
  ],
};
