const fs = require("fs");
const { Input } = require("enquirer");
const to = require("await-to-js").default;
const handleError = require("cli-handle-error");

module.exports = async ({ name, message, hint, initial }) => {
  const [err, response] = await to(
    new Input({
      name,
      message,
      hint,
      initial,
      validate(value, state) {
        if (state && state.name === "name") {
          if (fs.existsSync(value)) {
            return `Dirctory already exists`;
          } else {
            return true;
          }
        }

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
