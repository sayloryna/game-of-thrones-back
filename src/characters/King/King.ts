import { type BasicCharacter, type KingStructure } from "../../types.js";
import { Character } from "../Character/Character.js";

export class King extends Character implements KingStructure {
  constructor(
    { name, familyName, age }: BasicCharacter,
    public totalReignYears: number,
    public photoSource: string,
  ) {
    super(name, familyName, age);
  }

  speak() {
    return "Vais a morir todos";
  }
}
