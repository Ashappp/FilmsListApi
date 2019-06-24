const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MovieListSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  releaseYear: {
    type: Number,
    required: true
  },
  format: {
    type: String,
    required: true
  },
  stars: {
    type: [String],
    required: true
  }
});

const MovieList = mongoose.model("list", MovieListSchema);

module.exports = MovieList;