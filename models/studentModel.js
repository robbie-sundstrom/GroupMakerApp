var mongoose = require('mongoose');

var studentSchema = mongoose.Schema({
  name: String,
  age: int
});

module.exports = mongoose.model('Student', studentSchema)
var Student = mongoose.model('Student', studentSchema)