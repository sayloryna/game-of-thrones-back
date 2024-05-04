import { type CharacterStructure } from "../../types";

export abstract class Character implements CharacterStructure {
  public isAlive = true;
  public id: string;

  constructor(
    public name: string,
    public familyName: string,
    public age: number,
  ) {
    this.id = crypto.randomUUID();
  }

  die() {
    this.isAlive = false;
  }

  public abstract speak(): string;
}
