const users = require("../models/userModel");

const getAllUsers = async (req, res) => {
  let data = await users.getUsers();
  res.status(200).send(data);
};

let usersController = {
  getAllUsers,
};

module.exports = usersController;
