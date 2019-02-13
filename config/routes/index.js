const express = require('express');
const swaggerUI = require('swagger-ui-express');
const quotes = require('./quotes');
const swaggerDocument = require('../../swagger.json');

const router = express.Router();

router.use('/heroku/keepalive', (req, res) => res.status(200).end());
router.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
router.use('/quotes', quotes);


module.exports = router;
