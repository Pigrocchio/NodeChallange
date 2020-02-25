const express = require("express");
const router = express.Router();


const User = require('../models/User')

/**
 * @swagger
"/deleteUsersById/{userId}": {
      "delete": {
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
            "description": "OK"
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


router.get("/deleteUsersById/:id", (req, res) => {
  let id = { id: req.params.id };
  User.findOne(id)
    .then(userInfo => {
      if (userInfo != null) {
        userInfo
          .deleteOne(id)
          .then(() => {
            console.log("user updated");
            res.status(200).send("OK");
          });
      } else if (userInfo == null) {
        res.status(400).send("User not found");
      }
    })
    .catch(err => {
      console.log("DB error", err);
      res.status(404).send({ msg: "Invalid user Id" });
    });
});





 module.exports = router;


