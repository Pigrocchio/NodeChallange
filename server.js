const express = require("express");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
require("dotenv").config();
require("./configs/middlewares")(app);
require("./configs/mongoose");

const API_PORT = process.env.PORT || 3000;

//SWAGGER CONFIG

const swaggerDefinition = {
  info: {
    description: "Users API",
    version: "1.0.0",
    title: "Users"
  },
  host: process.env.SWAGGER_LOCAL_HOST,
  basePath: "/users",
  schemes: ["https", "http"]
};

const options = {
  swaggerDefinition,
  apis: ["./routes/*.js"]
};

const swaggerSpec = swaggerJSDoc(options);

app.get("/swagger.json", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerSpec);
});



app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/users", require("./routes/createUser"));

app.use("/users", require("./routes/getusersById"));

app.use("/users", require("./routes/getUsers"));

app.use("/users", require("./routes/deleteUsersById"));

app.use("/users", require("./routes/updateUsersById"));

// eslint-disable-next-line no-console
app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));

module.exports = app;
