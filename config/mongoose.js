//1. import all the packages
const mongoose = require("mongoose");
const MONGOURL =
  "mongodb+srv://kritica:1234@cluster0.wa20gkf.mongodb.net/?retryWrites=true&w=majority";

// connect to db
mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => console.log("Err in connecting db"));
