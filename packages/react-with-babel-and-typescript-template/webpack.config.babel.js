import path from "path";
import webpack from "webpack";
import HtmlPlugin from "html-webpack-plugin";

const config = (env, { mode }) => ({
  target: "web",
  devtool: "source-map",
  entry: path.resolve(__dirname, "./src/index"),

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(ts|js)x?$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".ts", ".jsx", ".tsx"],
  },

  output: {
    clean: true,
    publicPath: "/",
    filename: "[name].boundle.js",
    chunkFilename: "[id].[contenthash].js",
    path: path.resolve(__dirname, "./dist"),
  },

  plugins: [
    new HtmlPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],

  devServer: {
    port: 3001,
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, "public"),
      watch: true,
    },
  },
});

export default config;
