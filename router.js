const express = require("express");
const router = express.Router();
const productsController = require("./controllers/productController");
const cartsController = require("./controllers/cartController");
const usersController = require("./controllers/userController");

router.get("/", (req, res) => {
  res.send("Root");
});

router.get("/products", productsController.getAllProducts);
router.get("/carts", cartsController.getAllCarts);
router.get("/users", usersController.getAllUsers);

module.exports = router;
