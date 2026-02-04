import { validationResult } from "express-validator";

// middleware para recoger los errores de las validaciones
export const validateFields = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            msg: "hay errores en la validación",
            errors: errors.array()
        });
    }

    next();
};
