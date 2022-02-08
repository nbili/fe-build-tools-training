const alert = require("cli-alerts");

module.exports = (info) => {
  alert({
    type: `warning`,
    name: `debug log`,
    msg: ``,
  });

  console.log(info);
  console.log();
};
