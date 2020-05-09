const socketIO = require('socket.io')
const socket = {}

function connect(server) {
  socket.io = socketIO(server)
  socket.io.on('connection', (socket) => {
    //socket.emit('message', 'Bienvenido')
  })
}

module.exports = {
  connect,
  socket,
}
