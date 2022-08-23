const users = require("../models/userModel");

const sendUsers = async (_req, res) => {
  let data = await users.getUsers();
  res.status(200).send(data);
};

const sendUserById = async (req, res) => {
  let data = await users.getUserById(req.params.id);
  res.status(200).send(data);
};

const sendFirstThreeUsers = async (req, res) => {
  let data = await users.getUsers();
  const firstUsers = data.slice(0, 3);
  res.status(200).send(firstUsers);
};

let usersController = {
  sendUsers,
  sendUserById,
  sendFirstThreeUsers,
};

module.exports = usersController;
