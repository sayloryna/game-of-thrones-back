import { type Response, type Request } from "express";
import { characters } from "../data/characters.js";

export const charactersControler = {
  getCharacters(_req: Request, res: Response) {
    res.status(200);
    res.json({ characters });
  },

  getLocution(req: Request, res: Response) {
    const characterId = req.params.id;
    const character = characters.find(
      (character) => character.id === characterId,
    );

    if (character) {
      res.status(200);
      res.json({ locution: character.speak() });
      return;
    }

    res.status(404);
    res.json({ error: "character matching that id Not Found" });
  },
};
