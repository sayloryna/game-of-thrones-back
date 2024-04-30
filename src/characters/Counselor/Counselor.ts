import { type CharacterBasic, type CounselorStructure } from "../../types";
import { Character } from "../Character/Character.js";

export class Counselor extends Character implements CounselorStructure {
  constructor(
    { age, familyName, name }: CharacterBasic,
    public counselledCharacter: Character,
  ) {
    super(name, familyName, age);
  }

  public speak() {
    return "No sé por qué, pero creo que voy a morir pronto";
  }
}
