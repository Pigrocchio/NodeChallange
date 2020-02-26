const express = require("express");
const swaggerSpec = require("./configs/swagger");
const swaggerUi = require("swagger-ui-express");

const app = express();
require("dotenv").config();
require("./configs/middlewares")(app);
require("./configs/mongoose");
require("./configs/swagger");


const API_PORT = process.env.PORT || 3000;





app.get("/swagger.json", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerSpec);
});


app.get("/", function(req, res) {
  res.redirect("/api-docs");
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/users", require("./routes/createUser"));
app.use("/users", require("./routes/getusersById"));
app.use("/users", require("./routes/getUsers"));
app.use("/users", require("./routes/deleteUsersById"));
app.use("/users", require("./routes/updateUsersById"));
app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));

module.exports = app;
