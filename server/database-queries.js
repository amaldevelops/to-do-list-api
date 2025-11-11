import "dotenv/config"; // load DATABASE_URL

import { PrismaClient } from "./prisma/generated/client.ts";
import "dotenv/config";

const prisma = new PrismaClient();

// fetches all tasks
async function getAllTasks() {
  return await prisma.task.findMany();
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
  getTaskById,
  getTasksByStatus,
  getTasksSortedByCreation,
};
