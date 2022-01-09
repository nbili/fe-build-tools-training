#!/usr/bin/env node

const path = require("path");
const copy = require("copy-template-dir");

const vars = {
  name: "cli-image",
  version: "0.0.1",
  description: "create a cli",
};

const inDir = path.join(__dirname, `template`);
const outDir = path.join(process.cwd(), vars.name);

copy(inDir, outDir, vars, (err, createdFile) => {
  if (err) throw err;

  createdFile.forEach((filePath) => {
    const fileName = path.basename(filePath);
    console.log(`Created: ${fileName}`);
  });

  console.log('Done!')
});
