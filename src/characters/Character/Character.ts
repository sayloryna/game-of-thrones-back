import { type CharacterStructure } from "../../types";

export abstract class Character implements CharacterStructure {
  public isAlive = true;
  public photoSource: string;

  constructor(
    public name: string,
    public familyName: string,
    public age: number,
  ) {
    this.name = name;
    this.familyName = familyName;
    this.age = age;
  }

  die() {
    this.isAlive = false;
  }

  public abstract speak(): string;
}
