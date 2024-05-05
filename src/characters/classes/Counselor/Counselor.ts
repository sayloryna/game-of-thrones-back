import { type CounselorStructure, type BasicCharacter } from "../../types";
import { Character } from "../Character/Character.js";

export class Counselor extends Character implements CounselorStructure {
  constructor(
    { age, familyName, name, photoSource }: BasicCharacter,
    public counselledCharacter: Character,
    public locution = "No sé por qué, pero creo que voy a morir pronto",
  ) {
    super(name, familyName, age, photoSource);
  }

  public speak() {
    return this.locution;
  }
}
