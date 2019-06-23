const express = require("express");
const router = express.Router();
const allMovieList = require("../controllers/movieListcontroller");

router.get("/all", allMovieList.getAllList);

router.delete('/delete', allMovieList.deleteMovie);

router.put('/create',allMovieList.createNewMovie);

module.exports = router;
