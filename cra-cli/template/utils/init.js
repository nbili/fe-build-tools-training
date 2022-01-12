const welcome = require("cli-welcome");
const pkg = require("./../package.json");

module.exports = () => {
  welcome({
    title: `create-a-cli`,
    tagLine: `by nbili`,
    description: pkg.description,
    version: pkg.version,
    bgColor: `rgb(138, 79, 125)`,
    clear: true,
    bold: true,
  });
};
