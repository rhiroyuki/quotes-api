const express = require('express');
const router = express.Router();
const examples = require('./examples');

// router.get('/', (req, resp) => console.log('hey'));
router.use('/examples', examples);

module.exports = router;
