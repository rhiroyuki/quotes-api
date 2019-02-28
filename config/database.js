const mongoose = require('mongoose');
const config = require('./config');

const connect = () => {
  console.log(`Connecting on database: ${config.dbUrl}`);
  mongoose.connect(config.dbUrl, { useNewUrlParser: true });
  console.log('Database connected.');
};

const disconnect = () => {
  mongoose.disconnect();
  console.log('Database disconnected.');
};

module.exports = { connect, disconnect };
