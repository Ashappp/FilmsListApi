const express = require("express");
const router = express.Router();
const allFilmsList = require("../controllers/filmsListcontroller");

router.get("/", allFilmsList);

// router.delete('/goals',);

// router.put('/update',userController.updatePassword);

module.exports = routes;
