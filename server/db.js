const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

async function connect(url) {
  console.log('connecting to database');
  await mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log('[db] connected');
}

module.exports = { connect };
