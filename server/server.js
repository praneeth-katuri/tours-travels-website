const app = require("./src/app");
const config = require("./src/config");

app.listen(config.app.port, () => {
  console.log(
    `Server running in ${config.app.env} mode on port ${config.app.port}`
  );
});
