const Model = require('./model')

function createChat(chat) {
  const chatModel = new Model(chat)
  return chatModel.save()
}

function listChat(userId) {
  return new Promise((resolve, reject) => {
    let filter = {}
    if (userId) {
      filter = {
        users: userId,
      }
    }
    Model.find(filter)
      .populate('users')
      .exec((error, populated) => {
        if (error) {
          return reject(error)
        }
        resolve(populated)
      })
  })
}

module.exports = {
  add: createChat,
  list: listChat,
}
