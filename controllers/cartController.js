const cartsModel = require("../models/cartModel");
const userModel = require("../models/userModel");

const sendCarts = async (_req, res) => {
  let carts = await cartsModel.getCarts();
  res.status(200).send(carts);
};

const sendCartById = async (req, res) => {
  let carts = await cartsModel.getCartById(req.params.id);
  res.status(200).send(carts);
};

const sendCartsByUserId = async (req, res) => {
  let carts = await cartsModel.getCartsByUser(req.params.id);
  res.status(200).send(carts);
};

const sendBigCarts = async (_req, res) => {
  let carts = await cartsModel.getCarts();
  let bigCarts = await Promise.all(
    carts
      .filter((cart) => cart.products.length >= 2)
      .map(async (cart) => {
        const { username } = await userModel.getUserById(cart.userId);
        return {
          username: username,
          cart: cart,
        };
      })
  );
  res.status(200).send(bigCarts);
};

let cartsController = {
  sendCarts,
  sendCartById,
  sendCartsByUserId,
  sendBigCarts,
};

module.exports = cartsController;
