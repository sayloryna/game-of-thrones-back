import { type CharacterBasic, type KingStructure } from "../../types.js";
import { Character } from "../Character/Character.js";

export class King extends Character implements KingStructure {
  constructor(
    character: CharacterBasic,
    public totalReignYears: number,
  ) {
    super(character.name, character.familyName, character.age);
  }

  speak() {
    return "Vais a morir todos";
  }
}
