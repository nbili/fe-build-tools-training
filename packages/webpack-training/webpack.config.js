module.exports = {
  // mode: "development",
  mode: "production",
  entry: "./src/index.js",
  output: {
    clean: true,
    filename: "dist.js",
    // libraryTarget: "module",
    libraryTarget: "module",
  },
  experiments: {
    outputModule: true,
  }
};
