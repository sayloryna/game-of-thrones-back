import express from "express";
import { charactersControler } from "../controllers/charactersController.js";

const charactersRouter = express.Router();

charactersRouter.get("/", charactersControler.get);

charactersRouter.get("/:id", charactersControler.speak);

export default charactersRouter;
