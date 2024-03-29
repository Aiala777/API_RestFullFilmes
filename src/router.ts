import {Router, Request, Response} from "express";
import { createMovie, findMovieById, getAllMovies, removeMovie, updateMovie } from "./controllers/movieController";

//validations 
import { validate } from "./middleware/handleValidation";
import { movieCreateValidation } from "./middleware/movieValidation";

const router = Router()

export default router
    .get("/test", (req:Request, res: Response) => {
        res.status(200).send("API working");
    })
    .post("/movie", validate, createMovie)
    .get("/movie/:id", findMovieById)
    .get("/movie/:id", getAllMovies)
    .delete("/movie/:id", removeMovie)
    .patch("/movie/:id", updateMovie);