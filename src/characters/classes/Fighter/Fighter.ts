import {
  type FighterStructure,
  type BasicCharacter,
  type Level,
} from "../../types";
import { Character } from "../Character/Character.js";

export class Fighter extends Character implements FighterStructure {
  constructor(
    { name, familyName, age, photoSource }: BasicCharacter,
    public weapon: string,
    public dexterityLevel: Level,
    public locution = "Primero pego y luego pregunto",
  ) {
    super(name, familyName, age, photoSource);
  }

  speak() {
    return this.locution;
  }
}
