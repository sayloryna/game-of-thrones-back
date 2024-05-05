import express from "express";
import { charactersControler } from "../controllers/charactersController.js";

const charactersRouter = express.Router();

charactersRouter.get("/", charactersControler.getCharacters);

charactersRouter.get("/:id", charactersControler.getLocution);

charactersRouter.patch("/:id", charactersControler.killCharacter);

export default charactersRouter;
