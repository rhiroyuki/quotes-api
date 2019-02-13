const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema(
  {
    message: {
      type: String,
      required: true
    },
    author: String
  }
);

module.exports = mongoose.model('Quote', QuoteSchema);
