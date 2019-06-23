const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MovieListSchema = new Schema({
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

const MovieList = mongoose.model("list", MovieListSchema);

module.exports = MovieList;
