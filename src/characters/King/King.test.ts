import { King } from "./King";

describe("Given a King", () => {
  describe("When it speaks", () => {
    test("Then it should say 'Vais a morir todos'", () => {
      const king = new King({ name: "", familyName: "", age: 5 }, 5);

      const locution = "Vais a morir todos";

      expect(king.speak()).toBe(locution);
    });
  });
});
