var mongoose = require('mongoose');

var ideaSchema = mongoose.Schema({
  name: String,
  email: String,
  idea: String
});

exports.Idea = mongoose.model('Idea', ideaSchema);