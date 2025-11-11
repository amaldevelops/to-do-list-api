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
      task_status: data.task_status || "not_started", // default
      task_owner: data.task_owner,
    },
  });
}
async function updateTask(task_id, data) {
  const updateData = {};
  if (data.task_title !== undefined) updateData.task_title = data.task_title;
  if (data.task_description !== undefined)
    updateData.task_description = data.task_description;
  if (data.task_status !== undefined) updateData.task_status = data.task_status;
  if (data.task_owner !== undefined) updateData.task_owner = data.task_owner;

  return await prisma.task.update({
    where: { task_id: Number(task_id) },
    data: updateData,
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
