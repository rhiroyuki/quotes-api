const Quote = require('../models/quote');

const QuotesController = {
  create: (req, res, next) => {
    let quote = new Quote(req.body);

    if(req.body.message !== ''){
      quote.save((err)=>{
        if(err){
          console.log(err);
        } else {
          console.log("Successfully created a quote");
          res.status(201).send({ quote }).end();
        }
      })
    } else {
      console.log("Message can not be empty!");
    }
  },

  show: (req, res, next) => {
    Quote.findOne({ _id: req.params.id }, (err, quote) => {
      if (err) {
        return res.status(404).send({ message: 'Invalid ID' }).end();
      }

      res.send({
        data: {
          message: quote.message,
          author: quote.author
        }
      });
    });
  }
};

module.exports = QuotesController;
