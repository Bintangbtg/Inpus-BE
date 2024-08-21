import express, {Application, Request, Response, NextFunction} from "express";

const app: Application = express();
const port: Number = 8000;

app.use("/", (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({data: "Hello world"});
});

app.listen(port,()=>console.log(`server is listening on port ${port}`));