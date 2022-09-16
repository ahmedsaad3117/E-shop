const express = require("express");
const productRouter = new express.Router();

const productContolers = require("../controllers/product");

productRouter
  .route("/products")
  .post(productContolers.addProduct)
  .get(productContolers.getProducts);

productRouter.post("/review/product/:id", productContolers.addReview);

module.exports = productRouter;
