const message = require('../components/message/network');
const user = require('../components/user/network');
const chat = require('../components/chat/network');

function routes(app) {
  app.use('/api/messages', message);
  app.use('/api/users', user);
  app.use('/api/chats', chat);
}

module.exports = routes;
