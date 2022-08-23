const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const getCarts = () => {
  return fetch("https://fakestoreapi.com/carts").then((res) => res.json());
};

const getCartById = (id) => {
  return fetch("https://fakestoreapi.com/carts/" + id).then((res) =>
    res.json()
  );
};

const getCartsByUser = (id) => {
  return fetch("https://fakestoreapi.com/carts/user/" + id).then((res) =>
    res.json()
  );
};

let carts = {
  getCarts,
  getCartById,
  getCartsByUser,
};

module.exports = carts;
