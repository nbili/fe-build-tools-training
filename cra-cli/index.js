#!/usr/bin/env node

const path = require("path");
const copy = require("copy-template-dir");

const init = require("./utils/init");
const questions = require("./utils/questions");

const { green: g, dim: d } = require("chalk");
const alert = require("cli-alerts");

void (async () => {
  init();

  const vars = await questions();

  const inDir = path.join(__dirname, `template`);
  const outDir = path.join(process.cwd(), vars.name);

  const output = vars.name;

  copy(inDir, outDir, vars, (err, createdFiles) => {
    if (err) throw err;

    console.log();

    console.log(d(`Creating files in ${g(`./${output}`)}`));

    createdFiles.forEach((filePath) => {
      const fileName = path.basename(filePath);
      console.log(`${g.bold(`CREATED`)} ${fileName}`);
    });

    alert({
      type: "success",
      name: "ALL DONE",
      msg: `\n\n${createdFiles.length} files created in ${d(`./${output}`)}`,
    });
    console.log();
  });
})();
