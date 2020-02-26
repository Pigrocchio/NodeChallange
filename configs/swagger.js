const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
require("dotenv").config();


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

module.exports = swaggerSpec;