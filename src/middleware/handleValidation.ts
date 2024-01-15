import {Request, Response, NextFunction} from "express";
import { validationResult } from "express-validator";



export const validate = (req: Request, res: Response, next: NextFunction) => {

    const errors = validationResult(req);

    if(errors.isEmpty()){
        return next();
    }

    const extratectErrors: object[] = [];

    // .map = passar em todas as linhas do array 
    // .push incluir cada um dos itens no array
    errors.array().map(err => {  
        if (err.type === 'field') {
            extratectErrors.push({ [err.path]: err.msg })
        }
      });
}