#!/usr/bin/env node

/**
 * {{name}}
 * {{description}}
 *
 * @author {{authorName}}<{{authoerUrl}}>
 */

const init = require("./utils/init");
const cli = require("./utils/cli");
const log = require("./utils/log");

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

void (async () => {
  init({ clear });

  input.include(`help`) && cli.showHelp(0);

  debug && log(flags);
})();
