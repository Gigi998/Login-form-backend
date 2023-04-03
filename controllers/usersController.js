const User = require("../model/User");

const getAllUser = async (req, res) => {
  const users = await User.find();
  if (!users) return res.status(204).json({ message: "No users found" });
  res.json(users);
};

const deleteUser = async (req, res) => {
  if (!req?.body?.id) {
    res.status(400).json({ message: "Id is required" });
  }
  const id = req.body.id;
  const foundUser = await User.findOne({ _id: id }).exec();
  if (!foundUser)
    return res.status(204).json({ message: `NO employee matches ID ${id}` });
  const result = await User.deleteOne({ _id: id });
  res.json(result);
};

module.exports = {
  getAllUser,
  deleteUser,
};
