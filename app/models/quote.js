const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema(
  {
    message: String,
    author: String
  }
);

module.exports =  mongoose.model('Quote', QuoteSchema);

