#!/usr/bin/env node

const path = require("path");
const copy = require("copy-template-dir");

const ask = require("./utils/ask");
const init = require("./utils/init");

const { green: g, dim: d } = require("chalk");
const alert = require("cli-alerts");

void (async () => {
  init();

  const name = await ask({ message: `Cli Name ?`, hint: "(kebab-case only)" });
  const description = await ask({ message: `Cli description` });
  const version = await ask({ message: `Cli version?`, initial: "0.0.1" });

  const authorName = await ask({ message: `Cli author name?` });
  const authorEmail = await ask({ message: `Cli author email?` });
  const authorUrl = await ask({ message: `Cli author url?` });
  const license = await ask({ message: `Cli License?`, initial: "UNLICENSED" });

  const inDir = path.join(__dirname, `template`);
  const outDir = path.join(process.cwd(), name);

  const vars = {
    name,
    description,
    version,
    authorName,
    authorEmail,
    authorUrl,
    license,
  };

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
