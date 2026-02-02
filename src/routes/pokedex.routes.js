import { Router } from "express";
import { check } from "express-validator";
import { validateFields } from "../middlewares/validateFields.js";
import { createPokedex, getPokedex, updatePokedex, deletePokedex } from "../controller/pokedex.controller.js";

const router = Router();

// get 
router.get("/", getPokedex);

// post
router.post(
    "/",
    [
        check("number", "number es obligatorio").not().isEmpty(),
        check("number", "number debe ser un numero").isNumeric(),
    
        check("name", "name es obligatorio").not().isEmpty(),
        check("type", "type es obligatorio").not().isEmpty(),
        check("weakness", "weakness es obligatorio").not().isEmpty(),
        check("description", "description es obligatorio").not().isEmpty(),

        validateFields
    ],
    createPokedex
);

// put 
router.put(
    "/:id",
    [
        check("number", "number es obligatorio").not().isEmpty(),
        check("number", "number debe ser un numero").isNumeric(),

        check("name", "name es obligatorio").not().isEmpty(),
        check("type", "type es obligatorio").not().isEmpty(),
        check("weakness", "weakness es obligatorio").not().isEmpty(),
        check("description", "description es obligatorio").not().isEmpty(),

        validateFields
    ],
    updatePokedex
); 

// delete 
router.delete("/:id", deletePokedex); 

export default router;
