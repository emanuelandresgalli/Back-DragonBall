//Importamos express
const express = require("express");
//Guardamos la funcion express.Router() en una variable
const router = express.Router();

//Importamos las funciones del controlador de color
const { getAllCards, getCardsById, postCard } = require("../controllers/cards.controller");
//Definimos el metodo, la ruta de entrada y la función del controlador
//que se encargará de efectuar la lógica
router.post("/post-card", postCard);
router.get("/", getAllCards);
router.get("/:cardsId", getCardsById);
//exportamos la variable router
module.exports = router;