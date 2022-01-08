const fetch = require("node-fetch");
const to = require("await-to-js").default;
const ora = require("ora");
const yellow = require("chalk").yellow;
const green = require("chalk").green;

const spinner = ora({ text: "" });

process.on("unhandledRejection", () => {
  console.log(`❌ 💣`);
});

void (async () => {
  spinner.start(`${yellow("followers")} fetching github followers ...`);
  const apiURL = `https://api.github.com/users/nbili`;
  const res = await fetch(apiURL);
  const [err, data] = await to(res.json());

  console.log("\n" + data.followers);

  spinner.succeed(`${green(`Flllowers`)} fetched`);
})();
