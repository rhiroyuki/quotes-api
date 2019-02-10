const mongoose = require('mongoose');

const ExampleSchema = new mongoose.Schema(
  {
    title: String
  }
);

module.exports =  mongoose.model('Example', ExampleSchema);

