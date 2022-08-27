const productsModel = require("../models/productModel");

const sendAllProducts = async (_req, res) => {
  let data = await productsModel.getProducts();
  res.status(200).send(data);
};

const sendProductById = async (req, res) => {
  let data = await productsModel.getProductById(req.params.id);
  res.status(200).send(data);
};

const sendAllCategories = async (_req, res) => {
  let categories = await productsModel.getCategories();
  res.status(200).send(categories);
};

const sendCategories = async (_req, res) => {
  let categories = await productsModel.getCategories();
  const productsInCategory = await Promise.all(
    categories.map(async (category) => {
      return {
        category,
        products: await productsModel.getProductsByCategory(category),
      };
    })
  );
  res.status(200).send(productsInCategory);
};

const sendProductsbyCategory = async (req, res) => {
  let data = await productsModel.getProductsByCategory(req.params.category);
  res.status(200).send(data);
};

const sendProductsOrderedByPrice = async (req, res) => {
  let data = await productsModel.getProducts();
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

const sendMostExpensiveProducts = async (_req, res) => {
  let AllCategories = await productsModel.getCategories();
  let mostExpensiveProductByCategory = await Promise.all(
    AllCategories.map(async (category) => {
      let products = await productsModel.getProductsByCategory(category);
      return {
        category: category,
        product: products.reduce((a, b) => (a.price > b.price ? a : b)),
      };
    })
  );

  res.status(200).send(mostExpensiveProductByCategory);
};

let productsController = {
  sendAllProducts,
  sendProductById,
  sendAllCategories,
  sendCategories,
  sendProductsbyCategory,
  sendProductsOrderedByPrice,
  sendMostExpensiveProducts,
};

module.exports = productsController;
