/** @format */
const express = require("express");
const product = require("./routes/productRoutes");
const bcrypt = require("bcrypt");
const cors = require("cors");

const app = express();
app.use(
  cors({
    origin: "http://localhost:3001",
    credentials: true,
  })
);

app.use(express.json());

app.use("/api/v1", product);

module.exports = app;
