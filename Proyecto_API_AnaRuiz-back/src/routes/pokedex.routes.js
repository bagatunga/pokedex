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
        check("number", "number debe ser un numero entero").isInt(),
        check("number", "number debe ser mayor que 0").isInt({ min: 1 }),

        check("name", "name es obligatorio").not().isEmpty(),
        check("name", "name debe tener al menos 2 caracteres").isLength({ min: 2 }),
        check("name", "name no puede superar 30 caracteres").isLength({ max: 30 }),

        check("type", "type es obligatorio").not().isEmpty(),
        check("type", "type debe tener al menos 3 caracteres").isLength({ min: 3 }),
        check("type", "type no puede superar 50 caracteres").isLength({ max: 50 }),

        check("weakness", "weakness es obligatorio").not().isEmpty(),
        check("weakness", "weakness debe tener al menos 3 caracteres").isLength({ min: 3 }),
        check("weakness", "weakness no puede superar 50 caracteres").isLength({ max: 50 }),

        check("description", "description es obligatorio").not().isEmpty(),
        check("description", "description debe tener al menos 5 caracteres").isLength({ min: 5 }),
        check("description", "description no puede superar 200 caracteres").isLength({ max: 200 }), 

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
