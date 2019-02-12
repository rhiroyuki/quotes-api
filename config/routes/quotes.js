const express = require('express');
const router = express.Router();
const QuotesController = require('../../app/controllers/quotes-controller');

router.get('/:id', QuotesController.show);
router.post('/', QuotesController.create);

module.exports = router;
