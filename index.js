const express = require('express');
const app = express();
const routes = require('./config/routes');

require('./config/boot');

app.use('/', routes);

var server = app.listen(3000, () => console.log(`Server running on ${process.env.NODE_ENV} environment at ${server.address().port}!`));
