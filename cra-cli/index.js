#!/usr/bin/env node

const path = require("path");
const copy = require("copy-template-dir");

const ask = require("./utils/ask");
const init = require("./utils/init");

void (async () => {
  init();

  const name = await ask({ message: `Cli Name ?`, hint: "(kebab-case only)" });
  const description = await ask({ message: `Cli description` });
  const version = await ask({ message: `Cli version?`, initial: "0.0.1" });

  const inDir = path.join(__dirname, `template`);
  const outDir = path.join(process.cwd(), name);

  copy(inDir, outDir, { name, description, version }, (err, createdFile) => {
    if (err) throw err;

    createdFile.forEach((filePath) => {
      const fileName = path.basename(filePath);
      console.log(`Created: ${fileName}`);
    });

    console.log("Done!");
  });
})();
