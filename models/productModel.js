const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const getProducts = () => {
  return fetch("https://fakestoreapi.com/products").then((res) => res.json());
};

const getProductById = (id) => {
  return fetch("https://fakestoreapi.com/products/" + id).then((res) =>
    res.json()
  );
};

const getCategories = () => {
  return fetch("https://fakestoreapi.com/products/categories").then((res) =>
    res.json()
  );
};

const getProductsByCategory = (category) => {
  return fetch("https://fakestoreapi.com/products/category/" + category).then(
    (res) => res.json()
  );
};

let products = {
  getProducts,
  getCategories,
  getProductById,
  getProductsByCategory,
};

module.exports = products;
