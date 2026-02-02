import mongoose from "mongoose";
import normalize from 'normalize-mongoose/index.js';

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