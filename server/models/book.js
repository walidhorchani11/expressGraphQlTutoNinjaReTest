const mongoos = require('mongoose');

const bookSchema = new mongoos.Schema({
  title: String,
  authorId: String,
});


module.exports = mongoos.model('Book', bookSchema);