const MovieListModel = require("../models/movieList");
const fs = require("fs");

module.exports.getAllList = async (req, res) => {
  try {
    const data = await MovieListModel.find({});
    res.json({
      success: true,
      data,
      message: "ok"
    });
  } catch (err) {
    res.json({
      success: false,
      message: "no"
    });
  }
};

module.exports.deleteMovie = async (req, res) => {
  try {
    const movieToDelete = await MovieListModel.findByIdAndDelete(req.params.id);
    res.json({
      success: true,
      message: "movie deleted",
      movieToDelete
    });
  } catch (err) {
    res.json(err);
  }
};

module.exports.createNewMovie = async (req, res) => {
  try {
    console.log(req.body);
    const newMovie = new MovieListModel(req.body);
    await newMovie.save().then(doc =>
      res.json({
        success: true,
        message: "ok",
        createdFilm: doc
      })
    );
  } catch (err) {
    console.log(err);
    res.json({
      success: false,
      message: "no"
    });
  }
};

module.exports.uploadFile = (req, res) => {
  fs.readFile(`./uploads/${req.file.filename}`, "utf8", function(err, data) {
    if (err) throw err;
    let obj = {};
    let arr = [];
    let splitted = data.toString().split("\n");
    for (let i = 0; i < splitted.length; i++) {
      let splitLine = splitted[i].split(":");
      if (splitLine[0] !== "") obj[splitLine[0]] = splitLine[1];
      if (splitLine[0] === "") {
        if (Object.keys(obj).length > 0) {
          arr.push(obj);
        }
        obj = {};
      }
    }

    arr = arr.map(obj => ({
      title: obj.Title,
      releaseYear: obj["Release Year"],
      format: obj.Format,
      stars: obj.Stars.split(",")
    }));
    MovieListModel.insertMany(arr, function(error, docs) {
      if (error) {
        res.json({
          success: false,
          message: "file is not ulpoad"
        });
      }
      res.json({
        success: true,
        message: "file upload",
        createdMovies: docs
      });
    });
  });
};
