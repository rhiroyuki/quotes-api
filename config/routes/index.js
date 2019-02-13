const express = require('express');
const quotes = require('./quotes');
const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');

const router = express.Router();

router.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
router.use('/quotes', quotes);

module.exports = router;
