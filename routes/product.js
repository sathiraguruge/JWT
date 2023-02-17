const express = require("express");
const router = express.Router();
const { Product } = require("../models/product");
const auth = require("../middleware/auth");

router.get("/", async (req, res) => {
  const products = await Product.find();
  res.status(200).send(products);
});

router.post("/", auth, async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.status(200).send(product);
});

router.put("/:id", [auth], async (req, res) => {
  const product = await Product.findByIdAndUpdate(id, requestBody, {
    new: true,
  });
  if (!product)
    return res.status(404).send("The product with the given ID was not found");
  res.status(200).send(product);
});

router.delete("/:id", [auth], async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product)
    return res.status(404).send("The product with the given ID was not found");
  res.status(200).send();
});

module.exports = router;
