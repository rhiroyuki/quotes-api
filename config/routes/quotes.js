const express = require('express');
const QuotesController = require('../../app/controllers/quotes-controller');

const router = express.Router();

router.get('/', QuotesController.list);
router.get('/:id', QuotesController.show);
router.post('/', QuotesController.create);
router.put('/:id', QuotesController.update);

module.exports = router;
