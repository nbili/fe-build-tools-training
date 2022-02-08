const welcome = require("cli-welcome");
const unhandled = require("cli-handle-unhandled");
const pkg = require("./../package.json");

module.exports = (clear = true) => {
  unhandled();
  welcome({
    title: `{{name}}`,
    tagLine: `by nbili`,
    description: pkg.description,
    version: pkg.version,
    bgColor: `rgb(138, 79, 125)`,
    clear,
    bold: true,
  });
};
