/* eslint-disable indent */
/**
 * @swagger
 "definitions": {
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
    
 */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const addressSchema = new Schema(
  {
    id: Number,
    street: String,
    state: String,
    country: String,
    zip: String
  },
  {
    timestamps: true
  }
);

const AddressModel = mongoose.model("Address", addressSchema);
module.exports = AddressModel;
