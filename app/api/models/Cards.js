// Cargamos el módulo de mongoose
const mongoose = require("mongoose");
// Definimos los esquemas
const Schema = mongoose.Schema;
// Creamos el objeto del esquema con sus correspondientes campos
const CardsSchema = new Schema(
  {
    country: { type: String, require: true },
    image: { type: String, require: true },
    name: { type: String, require: true },
    description1: { type: String, require: true },
    description2: { type: String, require: true },
    description3: { type: String, require: true },
    description4: { type: String, require: true },
  },
  { timestamps: true }
);
// Exportamos el modelo para usarlo en otros ficheros
const Cards = mongoose.model("Cards", CardsSchema);
module.exports = Cards;