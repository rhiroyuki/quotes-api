const express = require('express');
const router = express.Router();
const examplesController = require('../../app/controllers/examplesController');

router.get('/', examplesController.index);
router.get('/:id', (req, res) => res.send(`Show view with id: ${req.params.id}`));

module.exports = router;
