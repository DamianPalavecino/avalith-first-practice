const carts = require("../models/cartModel");

const sendCarts = async (_req, res) => {
  let data = await carts.getCarts();
  res.status(200).send(data);
};

const sendCartById = async (req, res) => {
  let data = await carts.getCartById(req.params.id);
  res.status(200).send(data);
};

const sendCartsByUserId = async (req, res) => {
  let data = await carts.getCartsByUser(req.params.id);
  res.status(200).send(data);
};

let cartsController = {
  sendCarts,
  sendCartById,
  sendCartsByUserId,
};

module.exports = cartsController;
