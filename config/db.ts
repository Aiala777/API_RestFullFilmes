import mongoose from "mongoose";
import config  from "config";
import logger from "../config/logger"

async function connect() {

    const dbUri = config.get<string>("dbUri")

    try{

        await mongoose.connect(dbUri)
        logger.info(`Conectou no Banco de Dados`);  

    } catch (e) {
        console.log("Não foi possível conectar")
        console.log(`Erro: ${e}`)

    }
    
};

export default connect