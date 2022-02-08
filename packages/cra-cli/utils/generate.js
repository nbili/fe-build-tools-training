const path = require("path");
const copy = require("copy-template-dir");
const execa = require("execa");
const ora = require("ora");
const spinner = ora({ text: "" });

const questions = require("./questions");

const { green: g, dim: d } = require("chalk");
const alert = require("cli-alerts");

module.exports = async () => {
  const vars = await questions();

  const inDir = path.join(__dirname, `../template`);
  const outDir = path.join(process.cwd(), vars.name);

  const output = vars.name;

  copy(inDir, outDir, vars, async (err, createdFiles) => {
    if (err) throw err;

    console.log();

    console.log(d(`Creating files in ${g(`./${output}`)}`));

    createdFiles.forEach((filePath) => {
      const fileName = path.basename(filePath);
      console.log(`${g.bold(`CREATED`)} ${fileName}`);
    });

    console.log();

    process.chdir(outDir)

    const deps = [
      `meow`,
      `chalk`,
      `cli-alerts`,
      `cli-meow-help`,
      `cli-handle-error`,
      `cli-handle-unhandled`,
    ];

    spinner.start(`${g("依赖加载中 ...")}`);

    await execa(`npm`, [`install`, ...deps]);

    spinner.succeed(`依赖加载完成！`);

    console.log(`npm run xxx`)

    alert({
      type: "success",
      name: "ALL DONE",
      msg: `\n\n${createdFiles.length} files created in ${d(`./${output}`)}`,
    });
    console.log();
  });
};
