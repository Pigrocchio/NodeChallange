const express = require("express");
const router = express.Router();


const User = require('../models/User')

/**
 * @swagger
 *"/createUsers": {
      "post": {
        "parameters": [
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
          "201": {
            "description": "CREATED",
            "schema": {
              "$ref": "#/definitions/user"
            }
          },
          "405": {
            "description": "Invalid input"
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



router.post("/createUsers", (req, res) => {
 const { id, name, email, birthDate, address, street, zip, state, country, idstreet} = req.body;

  const newUser = new User({
    id,
    name,
    email,
    birthDate,
    address: { id: idstreet, street: street, zip: zip, state: state, country: country }
  });

    newUser.save()
    .then(newUser => {
      res.status(201).json(newUser);
    }).catch(err => {
      res.status(405).json({ message: "Invalid Input" });
      console.log("DB error", err)
    });
});



 module.exports = router;
