const express = require("express");
require("dotenv").config();
const dbConfig = require("./config/dbConfig");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

const employeeRoute = require("./routes/employeeRoute");

app.use("/api/employees/", employeeRoute);

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
