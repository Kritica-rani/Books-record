//1.import the model
const Product = require("../model/Product");

module.exports.createProduct = async (req, res) => {
  try {
    //logic
    const { name, author, description } = req.body;
    if (!name || !author) {
      return res.status(400).json({
        message: "Please fill all the required fields",
        data: {},
      });
    }
    //create
    const createdProduct = await Product.create({ name, author, description });
    return res.status(201).json({
      message: "Record created succesfully",
      data: createdProduct,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Something went wrong while creating the record",
      data: {},
    });
  }
};

module.exports.getAllBookRecords = async (req, res) => {
  try {
    //logic
    const allBookRecords = await Product.find({});
    return res.status(200).json({
      message: "Records fetched successfully",
      data: allBookRecords,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Something went wrong while creating the record",
      data: {},
    });
  }
};

//Create an API to update the record
//1. Id (to unquily identify the books you need to update)
//2. which field, update field
//3.findIDAndUpdate,id, things which you need to update
