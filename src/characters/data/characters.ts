import { Counselor } from "../classes/Counselor/Counselor.js";
import { Fighter } from "../classes/Fighter/Fighter.js";
import { King } from "../classes/King/King.js";
import { Squire } from "../classes/Squire/Squire.js";

export const joffreyBaratheon = new King(
  {
    name: "Jofrrey",
    familyName: "Baratheon",
    age: 14,
    photoSource: "images/characters-img/joffrey.webp",
  },
  2,
);

const daenerysTargaryen = new Fighter(
  {
    name: "Daenerys",
    familyName: "Targaryen",
    age: 23,
    photoSource: "images/characters-img/daenerys.webp",
  },
  "Drogon",
  8,
);

const jaimeLannister = new Fighter(
  {
    name: "Jaime",
    familyName: "Lannister",
    age: 23,
    photoSource: "images/characters-img/jaime.webp",
  },
  "Lamento de Viudas",
  8,
);

const tyrionLannister = new Counselor(
  {
    name: "Tyrion",
    familyName: "Lannister",
    age: 40,
    photoSource: "images/characters-img/tyrion.webp",
  },
  daenerysTargaryen,
);

const bronn = new Squire(
  {
    name: "Bronn",
    familyName: "",
    age: 33,
    photoSource: "images/characters-img/bronn.webp",
  },
  jaimeLannister,
  5,
);

export const characters = [
  jaimeLannister,
  joffreyBaratheon,
  tyrionLannister,
  daenerysTargaryen,
  bronn,
];
