#!/usr/bin/env node

const process = require("process");
const meow = require("meow");

// console.log(process.cwd());

process.env = {
  code: "foo",
};

// console.log(process.env.code);

// console.log(process.argv)

// process.exit(1);

const msg = `this is a test api`;

// process.stdout.write(msg + '\n')

// process.stdin.pipe(process.stdout)

const helpText = `
Usage
	npx train [options]

Options
	test    for test
	--test  for test
`;

const options = {
  flags: {
    test: {
      type: "boolean",
      default: false,
      alias: "t",
    },
  },
};

const flag = meow(helpText, options);

// console.log(flag);

// console.log(cli.flags);
// console.log("=======");
// console.log(cli.input);

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`what do you want ? \n`, (answer) => {
  console.log("answer: \n", answer);

  rl.close();
});
