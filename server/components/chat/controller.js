const store = require("./store");

function add(users) {
  if (!users || !Array.isArray(users) || users.length <= 1) {
    return Promise.reject("Users required");
  }

  const chat = {
    users: users,
  };
  return store.add(chat);
}

function list(userId) {
  return store.list(userId);
}

module.exports = {
  add,
  list,
};
