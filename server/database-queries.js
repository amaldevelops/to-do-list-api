import "dotenv/config"; // ensures DATABASE_URL is loaded
import pkg from "@prisma/client";
const { PrismaClient } = pkg;

const prisma = new PrismaClient();

// fetches all tasks
async function main() {
  const tasks = await prisma.task.findMany();
  console.log("All tasks:", tasks);
}

// Fetch a single task by ID
const task = await prisma.task.findUnique({
  where: { task_id: 1 },
});
console.log("Task with ID 1:", task);

//Filter tasks
const notStartedTasks = await prisma.task.findMany({
  where: { task_status: "not_started" },
});
console.log("Not started tasks:", notStartedTasks);

// Sort tasks
const sortedTasks = await prisma.task.findMany({
  orderBy: { created_at: "desc" },
});
console.log("Tasks sorted by creation date:", sortedTasks);

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
