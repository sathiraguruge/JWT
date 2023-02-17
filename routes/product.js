// Import the required dependencies
const express = require("express");
const router = express.Router();
const { Product } = require("../models/product");
const auth = require("../middleware/auth");

// Set up a GET request handler for the '/api/products' endpoint.
router.get("/", async (req, res) => {
  // Retrieve all products from the database and send as response.
  const products = await Product.find();
  res.status(200).send(products);
});

// Set up a POST request handler for the '/api/products' endpoint.
router.post("/", auth, async (req, res) => {
  // Create and save a new product instance based on the request body.
  const product = new Product(req.body);
  await product.save();

  // Send the new product as a response to the client.
  res.status(200).send(product);
});

// Set up a PUT request handler for the '/api/products/:id' endpoint.
router.put("/:id", [auth], async (req, res) => {
  // Retrieve the ID of the product to be updated from the request parameters.
  const id = req.params.id;

  // Retrieve the updated product information from the request body.
  const product = await Product.findByIdAndUpdate(req.params.id, requestBody, {
    new: true,
  });

  // If the product is not found, return a 404 error message to the client.
  if (!product)
    return res.status(404).send("The product with the given ID was not found");
  // Send the updated product as a response to the client.

  res.status(200).send(product);
});

// Set up a DELETE request handler for the '/api/products/:id' endpoint.
router.delete("/:id", [auth], async (req, res) => {
  // Retrieve the ID of the product to be deleted from the request parameters.
  const id = req.params.id;
  // Delete the product from the database.
  const product = await Product.findByIdAndDelete(req.params.id);

  // If the product is not found, return a 404 error message to the client.
  if (!product)
    return res.status(404).send("The product with the given ID was not found");

  // Send a success response to the client.
  res.status(200).send();
});

module.exports = router;
