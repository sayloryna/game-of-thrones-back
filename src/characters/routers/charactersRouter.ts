import express, { type Response } from "express";
import { type Characters } from "../..";
import { characters } from "../data/characters.js";
import { charactersControler } from "../controllers/charactersController.js";

const charactersRouter = express.Router();

charactersRouter.get("/", (_req, res: Response<Characters>) => {
  res.status(200).json(characters);
});
charactersRouter.get("/:id", charactersControler.speak);

export default charactersRouter;
