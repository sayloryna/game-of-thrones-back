import {
  type Level,
  type BasicCharacter,
  type FighterStructure,
} from "../../types";
import { Character } from "../Character/Character.js";

export class Fighter extends Character implements FighterStructure {
  constructor(
    { name, familyName, age }: BasicCharacter,
    public weapon: string,
    public dexterityLevel: Level,
    public photoSource: string,
  ) {
    super(name, familyName, age);
  }

  speak() {
    return "Primero pego y luego pregunto";
  }
}
