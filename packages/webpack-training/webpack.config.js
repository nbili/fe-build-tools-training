module.exports = {
  mode: "development",
  // mode: "production",
  entry: "./src/index.js",
  output: {
    clean: true,
    library: {
      // name: "Test",
      // libraryTarget: "commonjs",
      type: "module",
      umdNamedDefine: true,
    },
  },
	externals: ['Test'],
  experiments: {
    outputModule: true,
  },
};
