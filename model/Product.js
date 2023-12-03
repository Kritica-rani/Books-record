//1. import all the packagess
const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

// Create a model

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
