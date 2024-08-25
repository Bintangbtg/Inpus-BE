import { Router} from "express";
import { createTryout, deleteTryout, editTryout, getTryout, getTryoutByName } from "../controllers/tryout.controller";
import { authMiddleware } from '../middleware/auth.middleware';

export const Tryout: Router = Router();

Tryout.get("/", getTryout)
Tryout.get("/:name", getTryoutByName)
Tryout.post("/post", authMiddleware, createTryout)
Tryout.put("/:id", authMiddleware, editTryout)
Tryout.delete("/:id", authMiddleware, deleteTryout)