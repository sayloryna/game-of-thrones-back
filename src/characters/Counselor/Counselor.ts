import { type BasicCharacter, type CounselorStructure } from "../../types";
import { Character } from "../Character/Character.js";

export class Counselor extends Character implements CounselorStructure {
  constructor(
    { age, familyName, name }: BasicCharacter,
    public counselledCharacter: Character,
    public photoSource: string,
  ) {
    super(name, familyName, age);
  }

  public speak() {
    return "No sé por qué, pero creo que voy a morir pronto";
  }
}
