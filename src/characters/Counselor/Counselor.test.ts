import { King } from "../King/King";
import { Counselor } from "./Counselor";

describe("Given a Counselor", () => {
  describe("When it speaks", () => {
    test("Then it should say 'No sé por qué, pero creo que voy a morir pronto'", () => {
      const counselledCharacter = new King(
        { name: "", familyName: "", age: 5 },
        5,
        "",
      );
      const counselor = new Counselor(
        { name: "", familyName: "", age: 5 },
        counselledCharacter,
        "",
      );

      const locution = "No sé por qué, pero creo que voy a morir pronto";

      expect(counselor.speak()).toBe(locution);
    });
  });
});
