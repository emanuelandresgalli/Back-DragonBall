// Cargamos el modelo recien creado
const Cards = require("../models/Cards.js");
// Cargamos el fichero de los HTTPSTATUSCODE
const HTTPSTATUSCODE = require("../../utils/httpStatusCode");

//Metodo para retornar todos los colores registrados en la base de datos
const postCard = async (req, res, next) =>{
  try {
    const cards = new Cards();
    cards.country = req.body.country;
    cards.name = req.body.name;
    cards.image = req.body.image;
    cards.description1 = req.body.description1;
    cards.description2 = req.body.description2;
    cards.description3 = req.body.description3;
    cards.description4 = req.body.description4;
    await cards.save();
    res.json(cards);
  } catch (error) {
    
  }
}
const getAllCards = async (req, res, next) => {
  try {
    const cards = await Cards.find();
    console.log(Cards);
    return res.json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: { cards: cards },
    });
    
  } catch (err) {
    return next(err);
  }
};

// Metodo para la busqueda de colores por ID
const getCardsById = async (req, res, next) => {
  try {
    const { cardsId } = req.params;
    const cardsById = await Cards.findById(cardsId);
    return res.json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: { cardss: cardsById }
    });
  } catch (err) {
    return next(err);
  }
};
//Exportamos las funciones
module.exports = {
  getAllCards,
  getCardsById,
  postCard
}