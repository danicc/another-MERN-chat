const Model = require('./model');

function getMessages(filterChat) {
  return new Promise((resolve, reject) => {
    let filter = {};
    if (filterChat) {
      filter = {
        chat: filterChat,
      };
    }
    Model.find(filter)
      .populate('user')
      .exec((e, populated) => {
        if (e) {
          reject(`Couldn't get all messages: ${e}`);
          return;
        }
        resolve(populated);
      });
  });
}

function addMessage(message) {
  return new Promise((resolve, reject) => {
    const newMessage = new Model(message);

    newMessage.save((e) => {
      reject(`Couldn't add message: ${e}`);
      return;
    });
    resolve();
  });
}

function updateMessageText(id, message) {
  return new Promise(async (resolve, reject) => {
    try {
      const messageModel = await Model.findOne({
        _id: id,
      });

      messageModel.message = message;

      const updatedMessage = await messageModel.save();
      resolve(updatedMessage);
    } catch (e) {
      reject(`Couldn't update message text: ${e}`);
    }
  });
}

function removeMessage(id) {
  return new Promise(async (resolve, reject) => {
    const result = await Model.deleteOne({
      _id: id,
    });
    if (result.ok) {
      resolve();
    } else {
      reject(`Couldn't delete message`);
    }
  });
}

module.exports = {
  getMessages,
  addMessage,
  updateMessageText,
  removeMessage,
};
