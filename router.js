const express = require("express");
const router = express.Router();
const productsController = require("./controllers/productController");

router.get("/", (req, res) => {
  res.send("Root");
});

router.get("/products", productsController.getAllProducts);

module.exports = router;
