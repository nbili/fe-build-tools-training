const meow = require("meow");
const meowhelp = require("cli-meow-help");

const flags = {
  clear: {
    type: `boolean`,
    default: true,
    alias: `c`,
    desc: `clear the console`,
  },
  debug: {
    type: `boolean`,
    default: false,
    alias: `d`,
    desc: `print debug info`,
  },
  version: {
    type: `boolean`,
    alias: `v`,
    desc: `print cli version`,
  },
};

const commands = {
  help: {
    description: `print help info`,
  },
};

const helpText = meowhelp({
  name: `{{command}}`,
  flags,
  commands,
});

const options = {
  inferType: true,
  description: false,
  hardRejection: false,
  flags,
};

module.exports = meow(helpText, options);
