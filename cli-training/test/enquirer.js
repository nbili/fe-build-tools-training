const { Toggle } = require("enquirer");

void (async () => {
  const questions = [
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
    {
      type: "input",
      name: "job",
      message: "What is your job?",
    },
  ];

  const prompt = new Toggle({
    name: "hello",
    message: "pick your choice",
  });

  const response = await prompt.run();

  console.log(response);
})();
