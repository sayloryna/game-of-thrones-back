export interface CharacterBasic {
  name: string;
  familyName: string;
  age: number;
}

export interface CharacterStructure extends CharacterBasic {
  isAlive: boolean;
  die: () => void;
  speak: () => string;
  photoSrc: string;
}

export type Level = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
