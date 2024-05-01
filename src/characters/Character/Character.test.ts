import { Character } from "./Character";

class TestableCharacter extends Character {
  public speak(): string {
    throw new Error("Method not implemented.");
  }
}

describe("Given a character", () => {
  describe("When it dies", () => {
    test("Then it should not be alive", () => {
      const character = new TestableCharacter("clara", "", 5);

      character.die();

      expect(character.isAlive).toBe(false);
    });
  });
});
