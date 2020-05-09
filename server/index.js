require('dotenv').config();
const path = require('path');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const socket = require('./socket');
const db = require('./db');
const routes = require('./network/routes');
const config = require('./config');

db.connect(config.DB_URL);

const app = express();
const server = http.Server(app);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

socket.connect(server);
routes(app);

server.listen(config.PORT, function handleRunning() {
  console.log(`Server Running on ${config.HOST}:${config.PORT}`);
});
