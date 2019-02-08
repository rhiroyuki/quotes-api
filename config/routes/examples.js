const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('Index view'));
router.get('/:id', (req, res) => res.send(`Show view with id: ${req.params.id}`));

module.exports = router;
