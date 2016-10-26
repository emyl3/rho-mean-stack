const mongoose = require('mongoose');

const Person = mongoose.model('Person', {
  name: String,
  hometown: String,
  movie: String,
});

module.exports = Person;
