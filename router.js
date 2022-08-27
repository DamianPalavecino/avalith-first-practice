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

// Middleware to get the date of all requests
router.use(date.currentDate);

// Endpoints for Products/
router.get("/products", productsController.sendAllProducts);
router.get("/products/categories", productsController.sendCategories);
router.get("/products/:id", productsController.sendProductById);
router.get(
  "/products/category/:category",
  productsController.sendProductsbyCategory
);
router.get("/categories", productsController.sendAllCategories);

router.get("/prices", productsController.sendProductsOrderedByPrice); // You can use the query 'order' to sort prices in either ascending or descending order.
router.get("/expensive", productsController.sendMostExpensiveProducts);

// Endpoints for Carts/

router.get("/carts", cartsController.sendCarts);
router.get("/carts/:id", cartsController.sendCartById);
router.get("/carts/user/:id", cartsController.sendCartsByUserId);
router.get("/bigcarts", cartsController.sendBigCarts);

// Endpoints for Users/

router.get("/users", usersController.sendUsers);
router.get("/users/firsts", usersController.sendFirstThreeUsers);
router.get("/users/:id", usersController.sendUserById);

// Middleware for error handling
router.use(errorHandler.notFound);

module.exports = router;
