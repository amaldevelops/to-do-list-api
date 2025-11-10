import { Router } from "express";
import { controllerMainRoute } from "./controller.js";

const toDoListRouter = Router();

toDoListRouter.get("/", controllerMainRoute);

export default toDoListRouter;
