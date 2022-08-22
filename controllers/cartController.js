const carts = require("../models/cartModel");

const getAllCarts = async (req, res) => {
  let data = await carts.getCarts();
  res.status(200).send(data);
};

let cartsController = {
  getAllCarts,
};

module.exports = cartsController;
