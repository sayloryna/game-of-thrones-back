import {
  type Level,
  type BasicCharacter,
  type SquireStructure,
} from "../../types";
import { Character } from "../Character/Character.js";

export class Squire extends Character implements SquireStructure {
  constructor(
    { age, familyName, name }: BasicCharacter,
    public master: Character,
    public grovellingLevel: Level,
  ) {
    super(name, familyName, age);
  }

  speak() {
    return "Soy un loser";
  }
}
