const mongoos = require('mongoose');

const authorSchema = new mongoos.Schema({
  name: String,
  age: Number,
});

module.exports = mongoos.model('Author', authorSchema);
