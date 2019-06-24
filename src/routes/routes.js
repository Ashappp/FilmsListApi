const express = require("express");
const router = express.Router();
const allMovieList = require("../controllers/movieListcontroller");

router.get("/all", allMovieList.getAllList);

router.delete(`/delete/:id`, allMovieList.deleteMovie);

router.put('/create', allMovieList.createNewMovie);

router.put('/upload', allMovieList.uploadFile);

module.exports = router;