import express, { type Response } from "express";

import { characters } from "./characters/characters.js";
import { type Character } from "./characters/Character/Character.js";

export interface Characters {
  characters: Character[];
}

const app = express();

app.listen(6666, () => {
  console.log("Listening on port: http://localhost:6666");
});

app.get("/characters", (_req, res: Response<Character[]>) => {
  res.status(200).json(characters.characters);
});

app.use((_req, res) => {
  res.status(404).json({ error: "Endpoint not found" });
});
