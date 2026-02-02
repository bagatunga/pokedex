import PokedexModel from "../schemas/pokedex.schema.js";

//service donde tenemos todos las funciones para crear, listar, actualizar y eliminar pokemon

//aquí recibiremos los datos y guardaremos el pokemon con sus atributos
export const createPokedex = async function (number, name, type, weakness, description) {
    try {
        const pokedex = new PokedexModel({ number, name, type, weakness, description });
        return await pokedex.save();
    } catch (e) {
        throw Error('Error creating pokedex: ');
    }
}

//podremos listar los pokemon ordenados por su número de la pokedex
export const getPokedex = async function () {
    try {
        return await PokedexModel.find().sort({number: 1});
    } catch (e) {
        throw Error('Error fetching pokedex');
    }
}

//podemos actualizar nuestro pokemon buscándolo por su número de la pokedex (id)
export const updatePokedex = async (number, name, type, weakness, description) => {
    try {
        const pokedex = await PokedexModel.findById(number);
        if (!pokedex) {
            throw Error('There is no pokemon with that Id');
        }

        return await PokedexModel.findByIdAndUpdate(number, { name, type, weakness, description });
    } catch (e) {
        throw Error(e);
    }
}

//podemos eliminar pokemon buscándolo por su numero 
export const deletePokedex = async (number) => {
    try {
        const pokedex = await PokedexModel.findById(number);
        if (!pokedex) {
            throw Error('There is no pokemon with that ID');
        }
        return await PokedexModel.findByIdAndDelete(number);
    } catch (e) {
        throw Error('Error deleting pokemon');
    }
}