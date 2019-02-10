const express = require('express');
const router = express.Router();
const examples = require('./examples');

router.use('/examples', examples);

module.exports = router;
