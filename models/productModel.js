const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const getProducts = () => {
  return fetch("https://fakestoreapi.com/products").then((res) => res.json());
};

const getProductbyId = (id) => {
  return fetch("https://fakestoreapi.com/products/" + id).then((res) =>
    res.json()
  );
};

let products = {
  getProducts,
  getProductbyId,
};

module.exports = products;
