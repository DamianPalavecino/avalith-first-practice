const products = require("../models/productModel");

const getAllProducts = async (req, res) => {
  let data = await products.getProducts();

  res.status(200).send(data);
};

let productsController = {
  getAllProducts,
};

module.exports = productsController;
