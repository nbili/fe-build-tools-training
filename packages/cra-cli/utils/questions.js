const ask = require("./ask");

module.exports = async () => {
  let vars = {};
  const name = await ask({
    name: "name",
    message: `Cli Name ?`,
    hint: "(kebab-case only)",
  });
  const command = await ask({
    name: "command",
    message: `Cli command ?`,
    hint: "(optional: if diff from cli name)",
  });

  const description = await ask({
    name: "description",
    message: `Cli description`,
  });
  const version = await ask({
    name: "version",
    message: `Cli version?`,
    initial: "0.0.1",
  });

  const authorName = await ask({
    name: "authorName",
    message: `Cli author name?`,
  });
  const authorEmail = await ask({
    name: "authorEmail",
    message: `Cli author email?`,
  });
  const authorUrl = await ask({
    name: "authorUrl",
    message: `Cli author url?`,
  });
  const license = await ask({
    name: "license",
    message: `Cli License?`,
    initial: "UNLICENSED",
  });

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
