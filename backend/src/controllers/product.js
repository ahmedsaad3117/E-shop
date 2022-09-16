const Product = require("../models/product");

exports.addProduct = async (req, res) => {
  try {
    const product = new Product({
      ...req.body,
    });

    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

exports.addReview = async (req, res) => {
  const product = await Product.findById(req.params.id);

  try {
    console.log({...req.body})
    product.listOfReviews = product.listOfReviews.concat({ ...req.body });
    await product.save();

    res.status(201).json(product);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    res.status(500).json(err.message);
  }
};
