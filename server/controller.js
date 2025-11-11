import { getAllTasks } from "./database-queries.js";

async function controllerMainRoute(req, res, next) {
  try {
    console.log("Main Route Reached");

    res.json([{ Welcome: "Task List Api" }]);
  } catch (error) {
    console.error(error);
    res.json(error);
  }
}

// GET /tasks Returns a list of tasks.
async function controllerGetAllTasks(req, res, next) {
  try {
    console.log("All Tasks Get Route Reached");
    const response = await getAllTasks();
    res.json([{ allTasks: response }]);
  } catch (error) {
    console.error(error);
    res.json([{ error: "Error retrieving all tasks" }]);
  }
}

// POST /tasks Adds a new task.
async function controllerPostTasks(req, res, next) {
  try {
    console.log("Create New task route reached");
    res.json([{ createTask: "Create Task" }]);
  } catch (error) {
    console.error(error);
    res.json([{ error: "Error Creating new task" }]);
  }
}

// PUT /tasks/:id Updates a task (e.g., mark as completed)

async function controllerUpdateTasks(req, res, next) {
  try {
    console.log("Update task route reached ");
    res.json([{ updateTask: "Update Task" }]);
  } catch (error) {
    console.error(error);
    res.json([{ error: "Error updating task" }]);
  }
}

//DELETE /tasks/:id Deletes a task.

async function controllerDeleteTasks(req, res, next) {
  try {
    console.log("Delete Task");
    res.json([{ deleteTask: "Delete Task" }]);
  } catch (error) {
    console.error(error);
    res.json([{ error: "Error updating task" }]);
  }
}

export {
  controllerMainRoute,
  controllerGetAllTasks,
  controllerPostTasks,
  controllerUpdateTasks,
  controllerDeleteTasks,
};
