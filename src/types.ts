import { type Character } from "./characters/Character/Character.js";

export interface CharacterBasic {
  name: string;
  familyName: string;
  age: number;
}

export interface CharacterStructure extends CharacterBasic {
  isAlive: boolean;
  photoSource: string;
  die: () => void;
  speak: () => string;
}

export type Level = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export interface KingStructure {
  totalReignYears: number;
}

export interface FighterStructure {
  weapon: string;
  dexterityLevel: Level;
}

export interface CounselorStructure {
  counselledCharacter: Character;
}

export interface SquireStructure {
  master: Character;
  grovellingLevel: Level;
}
