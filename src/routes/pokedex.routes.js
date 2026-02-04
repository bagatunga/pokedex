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
        // number: obligatorio, numerico, entero, y con rango logico
        check("number", "number es obligatorio").not().isEmpty(),
        check("number", "number debe ser un numero").isNumeric(),
        check("number", "number debe ser un numero entero").isInt(), // añadido
        check("number", "number debe ser mayor que 0").isInt({ min: 1 }), // añadido

        // name: obligatorio, sin espacios raros, longitud minima
        check("name", "name es obligatorio").not().isEmpty(),
        check("name", "name debe tener al menos 2 caracteres").isLength({ min: 2 }), // añadido
        check("name", "name no puede superar 30 caracteres").isLength({ max: 30 }), // añadido
        check("name", "name no puede llevar solo espacios").trim().not().isEmpty(), // añadido

        // type: obligatorio y longitud razonable
        check("type", "type es obligatorio").not().isEmpty(),
        check("type", "type debe tener al menos 3 caracteres").isLength({ min: 3 }), // añadido
        check("type", "type no puede superar 20 caracteres").isLength({ max: 20 }), // añadido
        check("type", "type no puede llevar solo espacios").trim().not().isEmpty(), // añadido

        // weakness: obligatorio y longitud razonable
        check("weakness", "weakness es obligatorio").not().isEmpty(),
        check("weakness", "weakness debe tener al menos 3 caracteres").isLength({ min: 3 }), // añadido
        check("weakness", "weakness no puede superar 20 caracteres").isLength({ max: 20 }), // añadido
        check("weakness", "weakness no puede llevar solo espacios").trim().not().isEmpty(), // añadido

        // description: obligatorio, longitud minima y maxima
        check("description", "description es obligatorio").not().isEmpty(),
        check("description", "description debe tener al menos 5 caracteres").isLength({ min: 5 }), // añadido
        check("description", "description no puede superar 200 caracteres").isLength({ max: 200 }), // añadido
        check("description", "description no puede llevar solo espacios").trim().not().isEmpty(), // añadido

        validateFields
    ],
    createPokedex
);

// put
router.put(
    "/:id",
    [
        // mismas validaciones que en post (porque en update tambien pueden meterte datos malos)
        check("number", "number es obligatorio").not().isEmpty(),
        check("number", "number debe ser un numero").isNumeric(),
        check("number", "number debe ser un numero entero").isInt(),
        check("number", "number debe ser mayor que 0").isInt({ min: 1 }),

        check("name", "name es obligatorio").not().isEmpty(),
        check("name", "name debe tener al menos 2 caracteres").isLength({ min: 2 }),
        check("name", "name no puede superar 30 caracteres").isLength({ max: 30 }),

        check("type", "type es obligatorio").not().isEmpty(),
        check("type", "type debe tener al menos 3 caracteres").isLength({ min: 3 }),
        check("type", "type no puede superar 20 caracteres").isLength({ max: 20 }),

        check("weakness", "weakness es obligatorio").not().isEmpty(),
        check("weakness", "weakness debe tener al menos 3 caracteres").isLength({ min: 3 }),
        check("weakness", "weakness no puede superar 20 caracteres").isLength({ max: 20 }),

        check("description", "description es obligatorio").not().isEmpty(),
        check("description", "description debe tener al menos 5 caracteres").isLength({ min: 5 }),
        check("description", "description no puede superar 200 caracteres").isLength({ max: 200 }),

        validateFields
    ],
    updatePokedex
);

// delete
router.delete("/:id", deletePokedex);

export default router;
