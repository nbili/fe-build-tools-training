const ask = require("./ask");

module.exports = async () => {
  let vars = {};
  const name = await ask({ message: `Cli Name ?`, hint: "(kebab-case only)" });
  const command = await ask({
    message: `Cli command ?`,
    hint: "(optional: if diff from cli name)",
  });

  const description = await ask({ message: `Cli description` });
  const version = await ask({ message: `Cli version?`, initial: "0.0.1" });

  const authorName = await ask({ message: `Cli author name?` });
  const authorEmail = await ask({ message: `Cli author email?` });
  const authorUrl = await ask({ message: `Cli author url?` });
  const license = await ask({ message: `Cli License?`, initial: "UNLICENSED" });

  vars = {
    name,
    command: command ? command : name,
    description,
    version,
    authorName,
    authorEmail,
    authorUrl,
    license,
  };

  return vars;
};
