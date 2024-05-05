import {
  type SquireStructure,
  type BasicCharacter,
  type Level,
} from "../../types";
import { Character } from "../Character/Character.js";

export class Squire extends Character implements SquireStructure {
  constructor(
    { age, familyName, name, photoSource }: BasicCharacter,
    public master: Character,
    public grovellingLevel: Level,
    public locution = "Soy un loser",
  ) {
    super(name, familyName, age, photoSource);
  }

  speak() {
    return this.locution;
  }
}
