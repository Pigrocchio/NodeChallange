const bodyParser = require("body-parser");





module.exports = app => {
  // Middleware Setup
  
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  // CORS EXPORT
  
};
  



