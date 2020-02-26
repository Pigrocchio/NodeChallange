

const express = require("express");
const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUi = require ("swagger-ui-express");
const mongoose = require("mongoose");
const cors = require("cors");


const app = express();
require("dotenv").config();
require("./configs/middlewares")(app);

//MONGOOSE CONNECTION
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-xc8rg.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

module.exports = mongoose;

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
  schemes: ["http", "https"]
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

app.use(cors())
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/users", require("./routes/createUser"));

app.use("/users", require("./routes/getusersById"));

app.use("/users", require("./routes/getUsers"));

app.use("/users", require("./routes/deleteUsersById"));

app.use("/users", require("./routes/updateUsersById"))






// eslint-disable-next-line no-console
app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));

module.exports = app;
