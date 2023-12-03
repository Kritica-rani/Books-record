//1. import all the packges
const express = require("express");
const app = express();
const PORT = 9000;
// import the monggose
const db = require("./config/mongoose");
const routes = require("./routes/ProductRoutes");

//middleware
app.use(express.urlencoded());
app.use(express.json());
app.use("/", routes);

app.listen(PORT, (err) => {
  if (err) {
    console.log("errpor in starting server", err);
  }
  console.log("serrver is up and running", PORT);
});
