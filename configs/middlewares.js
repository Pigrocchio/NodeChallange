const bodyParser = require("body-parser");
const cors = require("cors");


// CORS CONFIG
const whitelist = ["http://localhost:3000"];
const corsOptions = {
  origin: (origin, cb) => {
    const originIsWhitelisted = whitelist.includes(origin);
    cb(null, originIsWhitelisted);
  },
  credentials: true // RUTAS PERSISTENTES
};




module.exports = app => {
  // Middleware Setup
  
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  // CORS EXPORT
  app.use(cors(corsOptions));
};
  



