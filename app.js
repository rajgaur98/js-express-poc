const express = require("express");
const helper = require("./src/lib/helper");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Register routes
helper
  .fileList("./src/routes")
  .forEach((filePath) => require(`./${filePath.toString()}`)(app));

module.exports = {
  app: app,
};
