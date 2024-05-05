import { type CharacterStructure } from "../../types";
import { randomUUID } from "node:crypto";

export abstract class Character implements CharacterStructure {
  public isAlive = true;
  public id: string;

  constructor(
    public name: string,
    public familyName: string,
    public age: number,
    public photoSource: string,
  ) {
    this.id = randomUUID();
  }

  die() {
    this.isAlive = false;
  }

  public abstract speak(): string;
}
