const Model = require('./model');

function getUsers() {
  return Model.find();
}

function getUserById(id) {
  return Model.findOne({
    _id: id,
  });
}

function addUser(user) {
  const userModel = new Model(user);
  return userModel.save();
}

module.exports = {
  addUser,
  getUsers,
  getUserById,
};
