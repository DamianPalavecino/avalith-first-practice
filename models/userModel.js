const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const getUsers = () => {
  return fetch("https://fakestoreapi.com/users").then((res) => res.json());
};

const getUserById = (id) => {
  return fetch("https://fakestoreapi.com/users/" + id).then((res) =>
    res.json()
  );
};

let users = {
  getUsers,
  getUserById,
};

module.exports = users;
