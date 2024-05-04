import { type Response, type Request } from "express";
import { characters } from "../data/characters.js";

export const charactersControler = {
  get(_req: Request, res: Response) {
    res.status(200).json(characters);
  },

  speak(req: Request, res: Response) {
    const characterId = req.params.id;
    const character = characters.characters.find(
      (character) => character.id === characterId,
    );

    if (character) {
      res.status(200).json({ locution: character.speak() });
      return;
    }

    res.status(404).json({ error: "character matching that id Not Found" });
  },
};
