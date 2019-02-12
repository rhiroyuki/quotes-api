const express = require('express');
const QuotesController = require('../../app/controllers/quotes-controller');

const router = express.Router();

router.get('/:id', QuotesController.show);
router.post('/', QuotesController.create);

module.exports = router;
