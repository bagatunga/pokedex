import mongoose from "mongoose";
import normalize from 'normalize-mongoose/index.js';

//modelado de datos, definición de cómo son nuestros datos en mongo
//he decidido cambiar un poco los atributos porque no me convencían los de la anterior entrega
const { Schema, model } = mongoose;
const pokedexSchema = new Schema({
    number: {
        type: Number,
        required: true
    },

    name: {
        type: String,
        required: true,
    },

    type: {
        type: String,
        required: true
    },

    weakness: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    }
});

pokedexSchema.plugin(normalize);

const PokedexModel = mongoose.model('Pokedex', pokedexSchema);

export default PokedexModel;