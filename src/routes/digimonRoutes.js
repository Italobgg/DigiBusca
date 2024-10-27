const express = require("express");
const router = express.Router();
const digimonController = require("../controllers/digimonController");

// Rota lista todos digimons
router.get("/", digimonController.getAllDigimons);

//Rota busca digimon por nome
router.get("/name/:name", digimonController.getDigimonByName);


//Rota busca digimon por level
router.get("/level/:level", digimonController.getDigimonByLevel);

module.exports = router;
