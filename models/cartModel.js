const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const getAllCarts = () => {
  return fetch("https://fakestoreapi.com/carts").then((res) => res.json());
};

let carts = {
  getAllCarts,
};

module.exports = carts;
