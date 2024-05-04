import express from "express";

import { type Character } from "./characters/classes/Character/Character.js";
import cors from "cors";
import morgan from "morgan";
import charactersRouter from "./characters/routers/charactersRouter.js";

export interface Characters {
  characters: Character[];
}

const app = express();
app.use(morgan("dev"));
app.use(cors());

app.listen(4000, () => {
  console.log("Listening on port: 4000");
});

app.use("/characters", charactersRouter);

app.use((_req, res) => {
  res.status(404).json({ error: "Endpoint not found" });
});
