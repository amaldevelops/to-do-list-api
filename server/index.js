import express, { urlencoded } from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json()); // Parses application/json
app.use(urlencoded({ extended: true }));

app.listen(port, () => {
  console.log("To Do List API is now running");
});
