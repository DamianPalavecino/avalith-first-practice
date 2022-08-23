const express = require("express");
const router = express.Router();
const productsController = require("./controllers/productController");
const cartsController = require("./controllers/cartController");
const usersController = require("./controllers/userController");
const date = require("./middlewares/date");
const errorHandler = require("./middlewares/errorHandler");

router.get("/", date.currentDate, (_req, res) => {
  res.send("Hello World!");
});

// Basic Endpoints for Products/

router.get("/products", date.currentDate, productsController.sendAllProducts);
router.get("/products/categories", productsController.sendCategories); // To be modified
router.get("/products/:id", productsController.sendProductById);
router.get(
  "/products/category/:category",
  productsController.sendProductsbyCategory
);

router.get("/prices", productsController.sendProductsOrderedByPrice); // You can use the query 'order' to sort prices in either ascending or descending order.

// Basic Endpoints for Carts/

router.get("/carts", cartsController.sendCarts);
router.get("/carts/:id", cartsController.sendCartById);
router.get("/carts/user/:id", cartsController.sendCartsByUserId);

// Basic Endpoints for Users/

router.get("/users", usersController.sendUsers);
router.get("/users/firsts", usersController.sendFirstThreeUsers); //);
router.get("/users/:id", usersController.sendUserById);

// Middleware for error handling
router.use(errorHandler.notFound);

module.exports = router;
