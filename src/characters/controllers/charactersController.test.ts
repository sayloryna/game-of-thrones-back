import { type Response, type Request } from "express";
import { charactersControler } from "./charactersController.js";

import { characters } from "../data/characters.js";

describe("Given the characterController", () => {
  describe("When its get method is called wiht a request and a response", () => {
    const req: Partial<Request> = {};
    const res: Partial<Response> = {
      status: jest.fn(),
      json: jest.fn(),
    };
    test("Then it should set the response statusCode to 200", () => {
      const statusCode = 200;

      charactersControler.get(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(statusCode);
    });

    test("Then it should set the response body to Characters", () => {
      charactersControler.get(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith({ characters });
    });
  });
});
