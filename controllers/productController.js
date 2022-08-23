const products = require("../models/productModel");

const sendAllProducts = async (_req, res) => {
  let data = await products.getProducts();
  res.status(200).send(data);
};

const sendProductById = async (req, res) => {
  let data = await products.getProductById(req.params.id);
  res.status(200).send(data);
};

const sendCategories = async (_req, res) => {
  let categories = await products.getCategories();
  const productsInCategory = await Promise.all(
    categories.map(async (category) => {
      return {
        category,
        products: await products.getProductsByCategory(category),
      };
    })
  );
  res.status(200).send(productsInCategory);
};

const sendProductsbyCategory = async (req, res) => {
  let data = await products.getProductsByCategory(req.params.category);
  res.status(200).send(data);
};

const sendProductsOrderedByPrice = async (req, res) => {
  let data = await products.getProducts();
  let sorted = req.query.order;
  let productsArray = data.map((product) => {
    return {
      id: product.id,
      title: product.title,
      price: product.price,
    };
  });

  if (sorted === "asc") {
    productsArray.sort((a, b) => a.price - b.price);
  } else if (sorted === "desc") {
    productsArray.sort((a, b) => b.price - a.price);
  }
  res.status(200).send(productsArray);
};

const sendMostExpensiveProduct = () => {};

let productsController = {
  sendAllProducts,
  sendProductById,
  sendCategories,
  sendProductsbyCategory,
  sendProductsOrderedByPrice,
  sendMostExpensiveProduct,
};

module.exports = productsController;
