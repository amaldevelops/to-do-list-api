// To seed this data to database `npx prisma db seed --preview-feature

import { PrismaClient, TaskStatus } from "./generated/client.ts";
import "dotenv/config";

const prisma = new PrismaClient();

async function main() {
  const tasks = [
    {
      task_title: "Setup Node.js + Express backend",
      task_description:
        "Initialize Node project, install Express, set up basic server routes.",
      task_status: TaskStatus.complete,
      task_owner: "amal",
    },
    {
      task_title: "Configure Prisma with PostgreSQL (Neon)",
      task_description:
        "Connect Prisma ORM to Neon Postgres database, create Task model and migrate.",
      task_status: TaskStatus.complete,
      task_owner: "amal",
    },
    {
      task_title: "Create REST API endpoints",
      task_description:
        "Implement GET /tasks, POST /tasks, PUT /tasks/:id, DELETE /tasks/:id.",
      task_status: TaskStatus.started,
      task_owner: "amal",
    },
    {
      task_title: "Build React frontend",
      task_description:
        "Use React to create a task list UI with add, update, and delete functionality.",
      task_status: TaskStatus.not_started,
      task_owner: "amal",
    },
    {
      task_title: "Integrate frontend with backend API",
      task_description:
        "Connect React app to Express API using fetch/axios, handle API responses.",
      task_status: TaskStatus.not_started,
      task_owner: "amal",
    },
    {
      task_title: "Deploy frontend to GitHub Pages",
      task_description:
        "Use gh-pages package to deploy React build folder to GitHub Pages.",
      task_status: TaskStatus.not_started,
      task_owner: "amal",
    },
    {
      task_title: "Implement basic stats display",
      task_description:
        "Show number of tasks per status and % completed in the frontend.",
      task_status: TaskStatus.not_started,
      task_owner: "amal",
    },
    {
      task_title: "Optional: Add filters and validation",
      task_description:
        "Add filters for task status and require title field validation.",
      task_status: TaskStatus.not_started,
      task_owner: "amal",
    },
  ];

  for (const task of tasks) {
    await prisma.task.create({ data: task });
  }

  console.log("Seed data created successfully!");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
