const express = require("express");
const cors = require("cors");

const app = express();

//Middleware
app.use(express.json());
app.use(cors());

// Routes here

module.exports = app;
