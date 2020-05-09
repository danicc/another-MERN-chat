const store = require('./store');

function getUsers() {
  return store.getUsers();
}

function getUserById(id) {
  return store.getUserById(id);
}

function addUser(name, avatar, description, location, twitter) {
  if (!name) {
    return Promise.reject('Required: name');
  }

  const user = {
    name,
    avatar,
    description,
    location,
    twitter,
  };
  return store.addUser(user);
}

module.exports = {
  addUser,
  getUsers,
  getUserById,
};
