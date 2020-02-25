const express = require("express");
const router = express.Router();

const User = require("../models/User");

/**
 * @swagger
     "/updateUsersById/{userId}": {
      "put": {
        "parameters": [
          {
            "in": "path",
            "name": "userId",
            "type": "integer",
            "required": true
          },
          {
            "in": "body",
            "name": "user",
            "schema": {
              "$ref": "#/definitions/user"
            },
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
    "definitions": {
    "user": {
      "properties": {
        "id": {
          "type": "integer"
        },
        "name": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "birthDate": {
          "type": "string",
          "format": "LocalDateTime",
          "description": "LocalDateTime type"
        },
        
        "address": {
          "$ref": "#/definitions/address"
        }
      }
    },
    "address": {
      "properties": {
        "id": {
          "type": "integer"
        },
        "street": {
          "type": "string"
        },
        "state": {
          "type": "string"
        },
        "city": {
          "type": "string"
        },
        "country": {
          "type": "string"
        },
        "zip": {
          "type": "string"
        }
      }
    }
  }
    
 */

router.put("/updateUsersById/:id", (req, res) => {
  let id = { id: req.params.id };
  User.findOne(id)
    .then(userInfo => {
      if (userInfo != null) {
        userInfo
          .updateOne({
            id: req.body.id,
            name: req.body.name,
            email: req.body.email,
            birthDate: req.body.birthDate,
            $set: {
              "address.id": req.body.id,
              "address.street": req.body.street,
              "address.zip": req.body.zip,
              "address.state": req.body.state,
              "address.country": req.body.country
            }
          })
          .then(() => {
            console.log("user updated");
            res.status(200).send("OK");
          });
      } else if (userInfo == null){
         
          res.status(400).send("User not found");
        
      }
    })
    .catch(err => {
      console.log("DB error", err);
      res.status(404).send({ msg: "Invalid user Id" });
    });
 
});

module.exports = router;


