//1. import all the files and packages req
const express = require("express");
const router = express.Router();
// import controller
const ProductController = require("../controller/ProductController");

//2. routes/api's
//1. to create the book
router.post("/create-book", ProductController.createProduct);
router.get("/getbooks", ProductController.getAllBookRecords);
module.exports = router;
