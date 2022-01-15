#!/usr/bin/env node

const init = require("./utils/init");
const generate = require("./utils/generate");

void (async () => {
  init();

  await generate();
})();
