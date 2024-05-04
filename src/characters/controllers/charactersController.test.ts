import { type Response, type Request } from "express";

import { charactersControler } from "./charactersController.js";
import { characters, joffreyBaratheon } from "../data/characters.js";

describe("Given the characterController", () => {
  const req: Partial<Request> = {};
  const res: Partial<Response> = {
    status: jest.fn(),
    json: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("When its getCharacter method is called wiht a request and a response", () => {
    test("Then it should set the response statusCode to 200", () => {
      const statusCode = 200;

      charactersControler.getCharacters(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(statusCode);
    });

    test("Then it should set the response body to Characters", () => {
      charactersControler.getCharacters(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith({ characters });
      expect(res.json).toHaveBeenCalledTimes(1);
    });
  });

  describe("when its getLocution method is called with a request includin a character Id and a response", () => {
    test("Then it should set the response body to the character with that ID locution", () => {
      const character = joffreyBaratheon;

      const req: Partial<Request> = {
        params: {
          id: character.id,
        },
      };
      charactersControler.getLocution(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith({ locution: character.speak() });
    });
  });
});
