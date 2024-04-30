import { type Level, type CharacterBasic } from "../../types";
import { Character } from "../Character/Character.js";

export class Fighter extends Character {
  public weapon: string;
  public dexterityLevel: Level;

  constructor(
    character: CharacterBasic,
    weapon: string,
    dexterityLevel: Level,
  ) {
    super(character.name, character.familyName, character.age);
    this.weapon = weapon;
    this.dexterityLevel = dexterityLevel;
  }

  speak() {
    return "Primero pego y luego pregunto";
  }
}
