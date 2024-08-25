import mongoose from "mongoose";
import config from "../config/environment";
import { logger } from "./logger";

mongoose.connect(`${config.db}`).then(() =>{
    logger.info('succes connect db')
}).catch((error) => {
    logger.info('could not connect to db')
    logger.error(error)
    process.exit(1)
})