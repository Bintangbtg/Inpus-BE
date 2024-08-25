import express, {Application, Request, Response, NextFunction} from "express";
import { routes } from "./routes";
import { logger } from "./utils/logger";
import bodyParser from "body-parser";
import cors from "cors";

//koneksi database
import './utils/connectDB'

const app: Application = express();
const port: Number = 8000;

// parse body request
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

// cors acces bandler
app.use(cors())
app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', '*')
    res.setHeader('Access-Control-Allow-Headers', '*')
    next()
})

routes(app)

app.listen(port,()=>logger.info(`server is listening on port ${port}`));