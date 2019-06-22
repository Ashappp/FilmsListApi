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
    required: true
  },
  stars: {
    type: Array,
    required: true
  }
});

const FilmsList = mongoose.model("list", FilmsListSchema);

module.exports = FilmsList;
