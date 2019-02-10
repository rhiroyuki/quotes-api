const express = require('express');
const app = express();
const config = require('./config/config');
const dbConnection = require('./config/database');
const morgan = require('morgan');

const routes = require('./config/routes');

app.use(morgan(':date - :method :url :status :response-time ms - :res[content-length]'));

app.use('/', routes);

const server = async () => {
  try {
    await dbConnection();
    app.listen(config.port, () => console.log(`Server running on ${process.env.NODE_ENV} environment at ${config.port}!`));
  } catch (e) {
    console.error(e);
  }
}

server();
