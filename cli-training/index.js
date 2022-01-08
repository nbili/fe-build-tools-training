#!/usr/bin/env node

const pkgJSON = require("./package.json");
const chalk = require("chalk");
const sym = require("log-symbols");

const meow = require("meow");

const error = chalk.bold.red.inverse;
const warning = chalk.keyword("orange").inverse;
const success = chalk.green.inverse;

const init = require("./utils/init");

(() => {
  init();

  console.log(`

${pkgJSON.description}

${chalk.bgBlueBright.bold(` About documentation `)}

${chalk.italic(
  ` There are several types of documentation available on this website: `
)}

${chalk.bgGreen(` API reference documentation `)}

${chalk.bgCyan(` ES6 features `)}

${chalk.bgRed(` Guides `)}

API reference documentation

The API reference documentation provides detailed information about a function or object in Node.js. 
This documentation indicates what arguments a method accepts, the return value of that method, and what errors may be related to that method.
It also indicates which methods are available for different versions of Node.js.

This documentation describes the built-in modules provided by Node.js.
It does not document modules provided by the community.


test >

${sym.error} ${error(" Error! ")}

${sym.warning} ${warning(" Warning! ")}

${sym.success} ${success(" Success! ")}
`);

})();
