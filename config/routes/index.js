const express = require('express');
const quotes = require('./quotes');

const router = express.Router();

router.use('/quotes', quotes);

module.exports = router;
