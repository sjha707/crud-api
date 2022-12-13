require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const database = require("./database/database");
const userController = require("./controllers/userController");
const newUserRegistration = require("./models/userSchema");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 8000;

// use of middle ware section

app.use(morgan("dev"));
app.use(cors());
app.use("/api", userController);

// defaulr Routes Section here

app.all("/", (req, res) => {
  res.send("Index File Is Working Now ");
});

app.listen(port, () => {
  console.log(`server is runnning on poort ${port}`);
});
