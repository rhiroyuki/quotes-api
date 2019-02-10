const Example = require('../models/example');

const examplesController = {
  index: (req, res) => {
    Example.find({}).exec((err, examples) => {
      if (err) {
        console.log('Error: ', err);
      } else {
        res.status(200).json({ examples });
      }
    });
  },

  show: (req, res) => {
    Example.findOne({ _id: req.params.id }).exec((err, example) => {
      if (err) {
        console.log('Error: ', err);
      } else {
        res.status(200).json({ example });
      }
    });
  }
};

module.exports = examplesController;
