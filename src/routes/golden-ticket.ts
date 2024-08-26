import { Router} from "express";
import { createGolden, deleteGolden, editGolden, getGolden, getGoldenByName } from "../controllers/golden-ticket.controller";
import { authMiddleware } from '../middleware/auth.middleware';

export const Golden: Router = Router();

Golden.get("/", getGolden)
Golden.get("/:name", getGoldenByName)
Golden.post("/post", authMiddleware, createGolden)
Golden.put("/:id", authMiddleware, editGolden)
Golden.delete("/:id", authMiddleware, deleteGolden)