const express = require('express');
const morgan = require('morgan');
const config = require('./config/config');
const dbConnection = require('./config/database');
const routes = require('./config/routes');

const app = express();

app.use(morgan(':date - :method :url :status :response-time ms - :res[content-length]'));
app.use(express.json());

app.use('/', routes);

const server = async () => {
  try {
    await dbConnection();
    app.listen(config.port, () => console.log(`Server running on ${process.env.NODE_ENV} environment at ${config.port}!`));
  } catch (e) {
    console.error(e);
  }
};

server();
