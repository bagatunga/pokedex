import * as PokedexService from '../services/pokedex.service.js'

// controller: aqui recibimos las peticiones http (req) y devolvemos respuestas (res)
// la logica de base de datos no va aqui, eso esta en el service

// crear un pokemon en la pokedex (post)
export const createPokedex = async (req, res) => {
    // cogemos los datos que vienen en el body (lo que nos manda el cliente)
    const { number, name, type, weakness, description } = req.body;

    try {
        // llamamos al service para crear y guardar el pokemon en mongodb
        const pokedex = await PokedexService.createPokedex(number, name, type, weakness, description);

        // si todo va bien, devolvemos el pokemon creado en formato json
        res.status(200).json({
            pokedex
        });
    } catch (err) {
        // si falla, devolvemos el error
        // si el error trae status (por ejemplo 404), lo usamos; si no, ponemos 400 por defecto
        res.status(err.status ? err.status : 400).json({
            // mensaje de error: si existe err.message lo enseñamos, si no, convertimos a texto
            msg: err.message ? err.message : err.toString()
        });
    }
}

// obtener listado de pokemon (get)
export const getPokedex = async (req, res) => {
    try {
        // pedimos al service que nos devuelva todos los pokemon (ordenados por numero)
        const pokedex = await PokedexService.getPokedex();

        // respondemos con la lista completa
        res.status(200).json({
            pokedex
        });
    } catch (err) {
        // si hay error al consultar, devolvemos mensaje
        res.status(err.status ? err.status : 400).json({
            msg: err.message ? err.message : err.toString()
        });
    }
}

// actualizar un pokemon por su id de mongo (put)
export const updatePokedex = async (req, res) => {
    // el id viene en la url (params), por ejemplo: /pokedex/1
    const pokedexId = req.params.id;

    // los nuevos datos vienen en el body
    const { number, name, type, weakness, description } = req.body;

    try {
        // llamamos al service para actualizar el pokemon
        // el service se encarga de comprobar si existe y actualizarlo
        const updated = await PokedexService.updatePokedex(
            pokedexId, number, name, type, weakness, description
        );

        // devolvemos el pokemon actualizado
        res.status(200).json({
            pokedex: updated
        });
    } catch (err) {
        // si no existe, el service puede lanzar un error con status 404
        // si es otro error, devolvemos 400 por defecto
        res.status(err.status ? err.status : 400).json({
            msg: err.message ? err.message : err.toString()
        });
    }
}

// eliminar un pokemon por su id de mongo (delete)
export const deletePokedex = async (req, res) => {
    // recogemos el id a eliminar desde la url
    const pokedexId = req.params.id;

    try {
        // llamamos al service para eliminarlo de la bd
        const deletedPokedex = await PokedexService.deletePokedex(pokedexId);

        // devolvemos el pokemon eliminado
        res.status(200).json({
            pokedex: deletedPokedex
        });
    } catch (err) {
        // si no existe, el service puede lanzar 404
        // si es otro error, devolvemos 400 por defecto
        res.status(err.status ? err.status : 400).json({
            msg: err.message ? err.message : err.toString()
        });
    }
}
