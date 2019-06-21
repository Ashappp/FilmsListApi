const express = require("express");
const router = express.Router();
const allFilmsList = require("../controllers/filmsListcontroller");

router.get("/all", allFilmsList.getAllList);

// router.delete('/goals',);

// router.put('/update',userController.updatePassword);

module.exports = router;
