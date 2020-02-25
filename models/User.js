/* eslint-disable indent */
/**
 * @swagger
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
    
 */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const addressSchema = require("./Address").schema;



const userSchema = new Schema(
  {
    id: Number,
    name: String,
    email: String,
    birthDate: { type: String },
    address: addressSchema 
  },
  {
    timestamps: true
  }
);

const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;