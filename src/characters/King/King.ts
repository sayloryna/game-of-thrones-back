import { Character } from "../Character/Character.js";

export class King extends Character {
  public totalReignYears: number;

  constructor(
    name: string,
    familyName: string,
    age: number,
    totalReignYears: number,
  ) {
    super(name, familyName, age);
    this.totalReignYears = totalReignYears;
  }

  speak() {
    return "Vais a morir todos";
  }
}
