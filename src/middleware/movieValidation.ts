import { Request, Response, NextFunction} from 'express';
import {body} from "express-validator"

export const movieCreateValidation = () => {
    return [
        body("title")
           .isString()
           .withMessage("O titulo e obrigatório.")
           .isLength({min:5})
           .withMessage("O título precisa ter no mínimo 5 caracteres."),
        body("rating")
           .isNumeric()
           .withMessage("A avaliação deve ser um número.")
      ];
    

};
