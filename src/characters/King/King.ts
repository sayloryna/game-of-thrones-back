import { type CharacterBasic, type KingStructure } from "../../types.js";
import { Character } from "../Character/Character.js";

export class King extends Character implements KingStructure {
  constructor(
    { name, familyName, age }: CharacterBasic,
    public totalReignYears: number,
  ) {
    super(name, familyName, age);
  }

  speak() {
    return "Vais a morir todos";
  }
}
