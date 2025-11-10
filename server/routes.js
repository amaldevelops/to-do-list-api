import { Router } from "express";
import {
  controllerMainRoute,
  controllerGetAllTasks,
  controllerPostTasks,
  controllerUpdateTasks,
  controllerDeleteTasks,
} from "./controller.js";

const toDoListRouter = Router();

toDoListRouter.get("/", controllerMainRoute); // Main route

toDoListRouter.get("/tasks", controllerGetAllTasks); //

toDoListRouter.post("/tasks", controllerPostTasks); //

toDoListRouter.put("/tasks/:id", controllerUpdateTasks); //

toDoListRouter.delete("/tasks/:id", controllerDeleteTasks); //

export default toDoListRouter;
