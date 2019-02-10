const mongoose = require('mongoose');
const config = require('./config')

module.exports = (dbUri = config.dbUrl) => {
  console.log(`Connecting on database: ${config.dbUrl}`);
  mongoose.connect(dbUri, { useNewUrlParser: true });
  console.log('Database connected.');
};
