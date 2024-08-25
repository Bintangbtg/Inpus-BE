import { Router, Request, Response, NextFunction } from "express";

export const GoldenTicket: Router = Router();

GoldenTicket.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({data: "Hello world"});
});