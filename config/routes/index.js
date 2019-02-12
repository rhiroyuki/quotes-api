const express = require('express');
const router = express.Router();
const quotes = require('./quotes');

router.use('/quotes', quotes);

module.exports = router;
