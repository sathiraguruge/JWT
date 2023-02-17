// Import the required dependencies
const express = require("express");
const products = require("../routes/product");
const login = require("../routes/login");

module.exports = function (app) {
  // adding the middleware to parse incoming JSON requests
  app.use(express.json());
  // mounting routes
  app.use("/api/products", products);
  app.use("/api/login", login);
};
