export abstract class Character {
  public isAlive = true;

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
