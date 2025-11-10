import express, { urlencoded } from "express";
import cors from "cors";
import dotenv from "dotenv";

import toDoListRouter from "./routes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json()); // Parses application/json
app.use(urlencoded({ extended: true }));

app.use("/", toDoListRouter);

app.listen(port, () => {
  console.log("To Do List API is now running on http://localhost:4000");
});
