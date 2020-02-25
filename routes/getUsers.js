const express = require("express");
const router = express.Router();
const User = require('../models/User')
const Address = require("../models/Address");
/**
 * @swagger
 *"/getusers": {
      "get": {
        "description": "Get all users",
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "type": "array",
              "items": {
                "$ref": "#/definitions/user"
              }
            }
          }
        }
      }
    }
 */


router.get("/getUsers", (req, res) => {
  User.find()
    .then(allUser => res.status(200).json(allUser).send('OK'))
    .catch(err => console.log("DB error", err));
});




  module.exports = router;

