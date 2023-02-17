const express = require("express");
const products = require("../routes/product");
const login = require("../routes/login");

module.exports = function (app) {
  app.use(express.json());
  app.use("/api/products", products);
  app.use("/api/login", login);
};
