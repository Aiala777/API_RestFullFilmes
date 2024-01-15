// ENV variables 
require("dotenv").config();


import express from "express"
import config from "config"

const app = express();

// JSON middleaware (trafegar info com os tipos de dados)
app.use(express.json());

//DB 
import db from "../config/db";

//Routes
import router from "./router"

//Logger
import logger from "../config/logger"

//Middleware
import morganMiddleware from "./middleware/morganMiddleware"

app.use(morganMiddleware)

app.use("/api/", router);


//app port 
const port = config.get<number>("port");

app.listen(port, async( ) => {
    await db();
    logger.info(`Rodando na porta: ${port}`);   
});


