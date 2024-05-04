import express, { type Response } from "express";
import { type Characters } from "../..";
import { characters } from "../data/characters.js";

const charactersRouter = express.Router();

charactersRouter.get("/", (_req, res: Response<Characters>) => {
  res.status(200).json(characters);
});

export default charactersRouter;
