import { Fighter } from "./Fighter";

describe("Given a Fighter", () => {
  describe("When it speaks", () => {
    test("Then it should say 'Primero pego y luego pregunto'", () => {
      const fighter = new Fighter(
        { name: "", familyName: "", age: 5 },
        "espada",
        5,
      );

      const locution = "Primero pego y luego pregunto";

      expect(fighter.speak()).toBe(locution);
    });
  });
});
