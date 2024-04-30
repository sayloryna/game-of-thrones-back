import { Counselor } from "./characters/Counselor/Counselor.js";
import { Fighter } from "./characters/Fighter/Fighter.js";
import { King } from "./characters/King/King.js";
import { Squire } from "./characters/Squire/Squire.js";

const joffreyBaratheon = new King(
  { name: "Jofrrey", familyName: "Baratheon", age: 14 },
  2,
);

const daenerysTargaryen = new Fighter(
  { name: "Daenerys", familyName: "Targaryen", age: 23 },
  "Drogon",
  8,
);

const jaimeLannister = new Fighter(
  { name: "Jaime", familyName: "Lannister", age: 23 },
  "Lamento de Viudas",
  8,
);

const tyrionLannister = new Counselor(
  { name: "Tyrion", familyName: "Lannister", age: 40 },
  daenerysTargaryen,
);

const bronn = new Squire(
  { name: "Bronn", familyName: "", age: 33 },
  jaimeLannister,
  5,
);
