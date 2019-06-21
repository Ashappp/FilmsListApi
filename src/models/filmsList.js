const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FilmsListSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  releaseYear: {
    type: Number
  },
  format: {
    type: String,
    default: 1
  },
  stars: {
    type: Array
  }
});

const FilmsList = mongoose.model("list", FilmsListSchema);

module.exports = FilmsList;
