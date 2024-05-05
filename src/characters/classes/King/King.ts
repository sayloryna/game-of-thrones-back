import { type KingStructure, type BasicCharacter } from "../../types";
import { Character } from "../Character/Character.js";

export class King extends Character implements KingStructure {
  constructor(
    { name, familyName, age, photoSource }: BasicCharacter,
    public totalReignYears: number,
    public locution = "Vais a morir todos",
  ) {
    super(name, familyName, age, photoSource);
  }

  speak() {
    return this.locution;
  }
}
