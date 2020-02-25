const express = require("express");
const router = express.Router();

const User = require("../models/User");

/**
 * @swagger
 "/getusersById/{userId}": {
      "get": {
        "description": "Get one user",
        "parameters": [
          {
            "in": "path",
            "name": "userId",
            "type": "integer",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/user"
            }
          },
          "400": {
            "description": "Invalid user id"
          },
          "404": {
            "description": "User not found"
          }
        }
      }
    }
    
  
 */

router.get("/getusersById/:id", (req, res) => {
  User.findOne({ id: req.params.id })
    .then(userInfo => {
      if (userInfo != null) {
        console.log("user found in db from findUsers");

        res.status(200).json(userInfo);
      } else if (userInfo == null) {
               res.status(404).send({ msg: "User not found" });
             }
    })
    .catch(err => {
      console.log("DB error", err);
      res.status(400).send({ msg: "Invalid user Id" });
    });
});





module.exports = router;
