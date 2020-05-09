const store = require('./store');
const socket = require('../../socket').socket;
const { getUserById } = require('../user/controller');

function getMessages(filterChat) {
  return store.getMessages(filterChat);
}

function addMessage(chat, user, message, file) {
  return new Promise(async (resolve, reject) => {
    if (!chat || !user || !message) {
      reject(' Required: chat | user | message');
      return;
    }
    const fullUser = await getUserById(user);

    let fileUrl = '';
    if (file) {
      fileUrl = 'http://localhost:3000/app/files/' + file.filename;
    }
    const fullMessage = {
      chat,
      user: fullUser,
      message,
      date: new Date(),
      file: fileUrl,
    };

    try {
      await store.addMessage(fullMessage);
      socket.io.emit('message', fullMessage);
      resolve(fullMessage);
    } catch (e) {
      reject(e);
    }
  });
}

function updateMessageText(id, message) {
  return new Promise(async (resolve, reject) => {
    if (!id || !message) {
      reject('Required: id | message');
    }

    const updatedMessage = await store.updateMessageText(id, message);
    resolve(updatedMessage);
  });
}

function removeMessage(id) {
  return new Promise(async (resolve, reject) => {
    if (!id) {
      reject('Required: id');
      return;
    }

    try {
      await store.removeMessage(id);

      resolve('Message Removed');
    } catch (e) {
      reject(e);
    }
  });
}

module.exports = {
  getMessages,
  addMessage,
  updateMessageText,
  removeMessage,
};
