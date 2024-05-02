import express, { type Response } from "express";

import { characters } from "./characters/characters.js";
import { type Character } from "./characters/Character/Character.js";

export interface Characters {
  characters: Character[];
}

const app = express();

app.listen(4000, () => {
  console.log("Listening on port: http://localhost:4000");
});

app.use((_req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  next();
});

app.get("/characters", (_req, res: Response<Characters>) => {
  res.status(200).json(characters);
});

app.use((_req, res) => {
  res.status(404).json({ error: "Endpoint not found" });
});
