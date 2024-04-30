import { Counselor } from "./characters/Counselor/Counselor.js";
import { Fighter } from "./characters/Fighter/Fighter.js";
import { King } from "./characters/King/King.js";

const joffreyBaratheon = new King("Jofrrey", "Baratheon", 14, 2);

const daenerysTargaryen = new Fighter(
  { name: "Daenerys", familyName: "Targaryen", age: 23 },
  "Drogon",
  8,
);

const tyrionLannister = new Counselor(
  { name: "Tyrion", familyName: "Lannister", age: 40 },
  daenerysTargaryen,
);
