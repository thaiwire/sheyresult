const mongoose = require("mongoose");

mongoose.connect(process.env.mongo_url);

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("MongoDB database connection established successfully");
});

connection.on("error", (err) => {
  console.log(
    "MongoDB connection error. Please make sure MongoDB is running. " + err
  );
  process.exit();
});

module.exports = mongoose;