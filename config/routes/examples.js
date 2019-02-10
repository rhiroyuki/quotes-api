const express = require('express');
const router = express.Router();
const examplesController = require('../../app/controllers/examplesController');

router.get('/', examplesController.index);
router.get('/:id', examplesController.show);

module.exports = router;
