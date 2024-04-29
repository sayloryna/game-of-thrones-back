/* eslint-disable @typescript-eslint/parameter-properties */
export class Character {
  public name: string;
  public familyName: string;
  public age: number;
  public isAlive = true;

  constructor(name: string, familyName: string, age: number) {
    this.name = name;
    this.familyName = familyName;
    this.age = age;
  }

  die(this: Character) {
    this.isAlive = false;
  }

  speak() {
    return "";
  }
}
