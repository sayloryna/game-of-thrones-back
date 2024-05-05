import { type Response, type Request } from "express";

import { charactersControler } from "./charactersController.js";
import { characters, joffreyBaratheon } from "../data/characters.js";
import { King } from "../classes/King/King.js";

describe("Given the characterController", () => {
  const req: Partial<Request> = {};
  const res: Partial<Response> = {
    status: jest.fn(),
    json: jest.fn(),
  };

  beforeEach(() => {
    jest.resetAllMocks();
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
    });
  });

  describe("When its killCharacter method its called with a request including a character Id that's in the list of charcaters", () => {
    test("Then the character should be dead and the response status code should be 214", () => {
      const character = joffreyBaratheon;
      const statusCode = 214;

      const req: Partial<Request> = {
        params: {
          id: character.id,
        },
      };

      charactersControler.killCharacter(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(statusCode);
      expect(character.isAlive).toBe(false);
    });
  });

  describe("When its killCharacter method its called with a request including a character Id that's NOT in the list of characters", () => {
    test("Then the character should be dead and the response status code should be 404 and the response include a message: error:'Character matching that id Not Found'", () => {
      const character = new King(
        { name: "", familyName: "", age: 5, photoSource: "" },
        5,
      );
      const statusCode = 404;

      const req: Partial<Request> = {
        params: {
          id: character.id,
        },
      };

      charactersControler.killCharacter(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(statusCode);
      expect(res.json).toHaveBeenCalledWith({
        error: "Character matching that id Not Found",
      });
    });
  });
});
