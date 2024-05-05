import { Fighter } from "../Fighter/Fighter.js";
import { Squire } from "./Squire.js";

describe("Given a Squire", () => {
  describe("When it speaks", () => {
    test("Then it should  say 'Soy un loser'", () => {
      const master = new Fighter(
        { name: "", familyName: "", age: 5, photoSource: "" },
        "",
        5,
      );

      const squire = new Squire(
        { name: "", age: 5, familyName: "", photoSource: "" },
        master,
        5,
      );

      const locution = "Soy un loser";

      expect(squire.speak()).toBe(locution);
    });
  });
});
