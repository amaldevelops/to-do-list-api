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

toDoListRouter.get("/tasks", controllerGetAllTasks); // GET /tasks Returns a list of tasks.

toDoListRouter.post("/tasks", controllerPostTasks); // POST /tasks Adds a new task.

toDoListRouter.put("/tasks/:id", controllerUpdateTasks); // PUT /tasks/:id Updates a task (e.g., mark as completed)

toDoListRouter.delete("/tasks/:id", controllerDeleteTasks); //DELETE /tasks/:id Deletes a task.

export default toDoListRouter;
