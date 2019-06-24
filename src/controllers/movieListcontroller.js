const MovieListSchema = require("../models/movieList");
const fs = require('fs')

module.exports.getAllList = async (req, res) => {
  try {
    const data = await MovieListSchema.find({});
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
    const movieToDelete = await MovieListSchema.findByIdAndDelete(req.params.id);
    res.send(movieToDelete);
  } catch (err) {
    res.send(err)
  }
};

module.exports.createNewMovie = async (req, res) => {
  try {
    console.log(req.body)
    const newMovie = new MovieListSchema(req.body);
    await newMovie.save().then(doc => res.json({
      success: true,
      message: "ok",
      createdFilm: doc
    }));
    res.json({
      success: true,
      message: "ok"
    })
  } catch (err) {
    console.log(err);
    res.json({
      success: false,
      message: "no"
    })
  }
};


module.exports.uploadFile= async (req, res) => {
  try {
    fs.readfile(req.body, 'utf8', function(err,data) {
      if(err) throw err;
      let obj = {};
      let splitted = data.toString().split("\n");
      for (let i = 0; i<splitted.length; i++) {
          let splitLine = splitted[i].split(":");
          obj[splitLine[0]] = obj.splittLine[1].split(" ");
      }
      console.log(obj);
  });
    res.json({
      success: true,
      message: "ok"
    });
  } catch (err) {
    res.json({
      success: false,
      message: "no"
    });
  }
};