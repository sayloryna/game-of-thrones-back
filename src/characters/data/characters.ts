import { type Characters } from "../..";
import { Counselor } from "../Classes/Counselor/Counselor";
import { Fighter } from "../Classes/Fighter/Fighter";
import { King } from "../Classes/King/King";
import { Squire } from "../Classes/Squire/Squire";

const joffreyBaratheon = new King(
  { name: "Jofrrey", familyName: "Baratheon", age: 14 },
  2,
  "images/characters-img/joffrey.webp",
);

const daenerysTargaryen = new Fighter(
  { name: "Daenerys", familyName: "Targaryen", age: 23 },
  "Drogon",
  8,
  "images/characters-img/daenerys.webp",
);

const jaimeLannister = new Fighter(
  { name: "Jaime", familyName: "Lannister", age: 23 },
  "Lamento de Viudas",
  8,
  "images/characters-img/jaime.webp",
);

const tyrionLannister = new Counselor(
  { name: "Tyrion", familyName: "Lannister", age: 40 },
  daenerysTargaryen,
  "images/characters-img/tyrion.webp",
);

const bronn = new Squire(
  {
    name: "Bronn",
    familyName: "",
    age: 33,
  },
  jaimeLannister,
  5,
  "images/characters-img/bronn.webp",
);

export const characters: Characters = {
  characters: [
    jaimeLannister,
    joffreyBaratheon,
    tyrionLannister,
    daenerysTargaryen,
    bronn,
  ],
};
