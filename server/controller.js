import {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
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
    console.log("Create New Task route reached");

    const { task_title, task_description, task_owner, task_status } = req.body;

    // Simple validation
    if (!task_title || !task_owner) {
      return res
        .status(400)
        .json({ error: "task_title and task_owner are required" });
    }

    // Create the task
    const newTask = await createTask({
      task_title,
      task_description,
      task_status,
      task_owner,
    });

    // Respond with created task
    res.status(201).json({
      message: "Task created successfully",
      task: newTask,
    });
  } catch (error) {
    console.error("❌ Error creating new task:", error);
    res.status(500).json({ error: "Error adding new task" });
  }
}

// PUT /tasks/:id Updates a task (e.g., mark as completed)

async function controllerUpdateTasks(req, res, next) {
  try {
    const taskId = req.params.id; // from URL
    const data = req.body; // JSON payload

    // Call the helper that uses Prisma
    const updatedTask = await updateTask(taskId, data);

    res.json(updatedTask);
  } catch (error) {
    console.error("Error updating task:", error);
    res.status(500).json({ error: "Error updating task" });
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
