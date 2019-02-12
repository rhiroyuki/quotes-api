const express = require('express');
const router = express.Router();
const quoteController = require('../../app/controllers/QuoteController');

router.post('/create', quoteController.create);

module.exports = router;
