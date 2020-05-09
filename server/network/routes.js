const message = require('../components/message/network')
const user = require('../components/user/network')
const chat = require('../components/chat/network')

function routes(app) {
  app.use('/messages', message)
  app.use('/users', user)
  app.use('/chats', chat)
}

module.exports = routes
