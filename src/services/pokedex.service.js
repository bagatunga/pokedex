import PokedexModel from "../schemas/pokedex.schema.js";

// service: aqui es donde ponemos la logica de base de datos.
// el controller llama a estas funciones y aqui hacemos las consultas a mongodb con mongoose.

// aqui recibiremos los datos y guardaremos el pokemon con sus atributos
export const createPokedex = async function (number, name, type, weakness, description) {
    try {
        // creamos el pokemon con los datos recibidos
        const pokedex = new PokedexModel({ number, name, type, weakness, description });

        // guardamos en la base de datos y devolvemos el pokemon ya guardado
        return await pokedex.save();
    } catch (e) {
        // si algo falla al guardar, lanzamos error para que lo gestione el controller
        throw Error('Error creating pokemon: ');
    }
}

// podremos listar los pokemon ordenados por su número de la pokedex
export const getPokedex = async function () {
    try {
        // buscamos todos los pokemon y los ordenamos por el campo number (numero de la pokedex)
        return await PokedexModel.find().sort({ number: 1 });
    } catch (e) {
        // si falla la consulta, lanzamos error para que lo gestione el controller
        throw Error('Error fetching pokedex');
    }
}

// podemos actualizar nuestro pokemon buscándolo por su id
export const updatePokedex = async (id, number, name, type, weakness, description) => {
    try {
        // primero comprobamos si existe un pokemon con ese id
        const pokedex = await PokedexModel.findById(id);

        // si no existe, lanzamos un error con status 404 (esto lo usa el controller para responder correctamente)
        if (!pokedex) {
            const err = new Error('There is no pokemon with that ID');
            err.status = 404;
            throw err;
        }

        // si existe, actualizamos sus datos
        return await PokedexModel.findByIdAndUpdate(
            id,
            { number, name, type, weakness, description },
            // new: true devuelve el documento ya actualizado
            // runvalidators: true hace que al actualizar se respeten las validaciones del schema
            { new: true, runValidators: true }
        );
    } catch (e) {
        // relanzamos el error para que llegue al controller
        throw e;
    }
}

// podemos eliminar pokemon buscándolo por su id
export const deletePokedex = async (id) => {
    try {
        // primero comprobamos si existe un pokemon con ese id
        const pokedex = await PokedexModel.findById(id);

        // si no existe, lanzamos error con status 404
        if (!pokedex) {
            const err = new Error('There is no pokemon with that ID');
            err.status = 404;
            throw err;
        }

        // si existe, lo eliminamos y devolvemos el documento eliminado
        return await PokedexModel.findByIdAndDelete(id);
    } catch (e) {
        // relanzamos el error para que lo gestione el controller
        throw e;
    }
}
