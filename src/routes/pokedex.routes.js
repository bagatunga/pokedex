import { Router } from "express";
import { pruebaPokemon } from "../controller/pokedex.controller.js";


const pokedexRouter = Router();

pokedexRouter.get("/pokedex", (req, res) => {
    res.json({ ok: true, message: "Pokédex API funcionando" });
});

pokedexRouter.get("/pokedex/prueba", pruebaPokemon);

export default pokedexRouter;
