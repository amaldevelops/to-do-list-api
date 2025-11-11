import {
  getAllTasks,
  getTaskById,
  getTasksByStatus,
  getTasksSortedByCreation,
} from "./database-queries.js";

const apiInfo = {
  Welcome: "📋 Task List API",
  Description:
    "A RESTful API built with Node.js, Express, and PostgreSQL using Prisma ORM for database operations.",
  Framework: "Node.js + Express",
  Database: "PostgreSQL (via Prisma ORM)",
  Architecture: "REST (stateless, resource-oriented)",
  Methods: {
    GET: "Retrieve data",
    POST: "Create new records",
    PUT: "Update existing records",
    DELETE: "Remove records",
  },
  Endpoints: {
    GET: "/tasks → Fetch all tasks",
    POST: "/tasks → Create a new task",
    PUT: "/tasks/:id → Update task details or mark as completed",
    DELETE: "/tasks/:id → Delete a specific task",
  },
};

async function controllerMainRoute(req, res, next) {
  try {
    console.log("Main Route Reached");

    res.json(apiInfo);
  } catch (error) {
    console.error(error);
    res.json(error);
  }
}

// GET /tasks Returns a list of all tasks
async function controllerGetAllTasks(req, res, next) {
  try {
    console.log("All Tasks Get Route Reached");
    const response = await getAllTasks();
    res.json({ tasks: response || [] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error retrieving all tasks" });
  }
}

// POST /tasks Adds a new task.
async function controllerPostTasks(req, res, next) {
  try {
    console.log("Create New task route reached");
    const response = await res.json([{ createTask: "Create Task" }]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error Adding new task" });
  }
}

// PUT /tasks/:id Updates a task (e.g., mark as completed)

async function controllerUpdateTasks(req, res, next) {
  try {
    console.log("Update task route reached ");
    res.json([{ updateTask: "Update Task" }]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error Updating task" });
  }
}

//DELETE /tasks/:id Deletes a task.

async function controllerDeleteTasks(req, res, next) {
  try {
    console.log("Delete Task");
    res.json([{ deleteTask: "Delete Task" }]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error deleting task" });
  }
}

export {
  controllerMainRoute,
  controllerGetAllTasks,
  controllerPostTasks,
  controllerUpdateTasks,
  controllerDeleteTasks,
};
