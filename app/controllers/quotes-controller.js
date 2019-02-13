const Quote = require('../models/quote');

const QuotesController = {
  create: (req, res) => {
    const quote = new Quote(req.body);

    quote.save((invalidQuote) => {
      if (invalidQuote) return res.status(422).send(invalidQuote.errors);

      res.status(201).send({ quote });
    });
  },

  update: (req, res) => {
    const updateStatement = { $set: { message: req.body.message, author: req.body.author } };
    const updateOptions = { new: true, runValidators: true };

    Quote.findByIdAndUpdate(req.params.id, updateStatement, updateOptions, (err, quote) => {
      if (err) return res.status(422).send(err.errors);

      res.status(200).send({ quote }).end();
    });
  },

  show: (req, res) => {
    Quote.findOne({ _id: req.params.id }, (err, quote) => {
      if (quote) {
        return res.send({
          data: {
            message: quote.message,
            author: quote.author
          }
        });
      }

      res.status(404).send({ message: 'Quote not found' });
    });
  },

  list: (req, res) => {
    Quote.find({}, (err, quotes) => {
      if (err) return res.status(500).send({ message: 'Internal Server Error' });

      res.send({ data: quotes });
    });
  }
};

module.exports = QuotesController;
