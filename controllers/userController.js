const userModel = require("../models/userModel");

const sendUsers = async (_req, res) => {
  let data = await userModel.getUsers();
  res.status(200).send(data);
};

const sendUserById = async (req, res) => {
  let data = await userModel.getUserById(req.params.id);
  res.status(200).send(data);
};

const sendFirstThreeUsers = async (_req, res) => {
  let data = await userModel.getUsers();
  const firstUsers = data.slice(0, 3);
  res.status(200).send(firstUsers);
};

let usersController = {
  sendUsers,
  sendUserById,
  sendFirstThreeUsers,
};

module.exports = usersController;
