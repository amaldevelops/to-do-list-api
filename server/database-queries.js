import "dotenv/config"; // load DATABASE_URL

import { PrismaClient } from "./prisma/generated/client.ts";
import "dotenv/config";

const prisma = new PrismaClient();

// fetches all tasks
async function getAllTasks() {
  return await prisma.task.findMany();
}
// Create a new task"
async function createTask(data) {
  return await prisma.task.create({
    data: {
      task_title: data.task_title,
      task_description: data.task_description || null,
      task_status: data.task_status || "not_started", // default if not provided
      task_owner: data.task_owner,
    },
  });
}
// Update task details or mark as completed",
async function updateTask(task_id, data) {
  return await prisma.task.update({
    where: { task_id: Number(task_id) }, // Identify which task to update
    data: {
      task_title: data.task_title, // Optional: update title
      task_description: data.task_description, // Optional: update description
      task_status: data.task_status, // Optional: update status
      task_owner: data.task_owner, // Optional: reassign owner
      updated_at: new Date(), // Ensures updated_at changes (redundant but explicit)
    },
  });
}

// Delete a specific task

async function deleteTask(task_id) {
  return await prisma.task.delete({
    where: { task_id: Number(task_id) },
  });
}

// fetch a single task by ID
async function getTaskById(id) {
  return await prisma.task.findUnique({
    where: { task_id: id },
  });
}

// fetch tasks with a specific status
async function getTasksByStatus(status) {
  return await prisma.task.findMany({
    where: { task_status: status },
  });
}

// fetch tasks sorted by creation date
async function getTasksSortedByCreation() {
  return await prisma.task.findMany({
    orderBy: { created_at: "desc" },
  });
}

export {
  prisma,
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
  getTaskById,
  getTasksByStatus,
  getTasksSortedByCreation,
};
