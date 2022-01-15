const { Input } = require("enquirer");
const to = require("await-to-js").default;
const handleError = require("cli-handle-error");

module.exports = async ({ message, hint, initial }) => {
  const [err, response] = await to(
    new Input({
      message,
      hint,
      initial,
      validate(value, state) {
        return !value ? `please input a value` : true;
      },
    })
      .on("cancel", () => {
        process.exit(1);
      })
      .run()
  );

  handleError(`INPUT`, err);

  return response;
};
