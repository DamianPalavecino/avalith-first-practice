const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const getAllUsers = () => {
  return fetch("https://fakestoreapi.com/users").then((res) => res.json());
};

let users = {
  getAllUsers,
};

module.exports = users;
