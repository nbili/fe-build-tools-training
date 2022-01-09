#!/usr/bin/env node

const path = require("path");
const copy = require("copy-template-dir");

const vars = {
  name: "nbili",
};

const inDir = path.join(__dirname, `template`);
const outDir = path.join(process.cwd(), `output`);

copy(inDir, outDir, vars, (err, createdFile) => {
  if (err) throw err;

  createdFile.forEach((filePath) => {
    console.log(`created ${filePath}`);
  });
});
