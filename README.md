# To Do List API & Frontend

# Introduction

A clean and full-stack To-Do List Application built with Node.js, PostgreSQL, Prisma ORM, and React.
This project showcases RESTful API design, database integration, and a responsive frontend for managing tasks efficiently.

## 🚀 Features

### 🧩 Backend (API)

- **GET /tasks** — Retrieve all tasks
- **POST /tasks** — Add a new task
- **PUT /tasks/:id** — Update a task (e.g., mark as completed or edit details)
- **DELETE /tasks/:id** — Remove a task

### 💻 Frontend

- Task list view displaying task ID, title, description, and status
- Create, update, and delete tasks directly from the UI
- Basic statistics: total tasks, completed percentage, etc.
- Responsive, simple, and intuitive interface

### 🌟 Optional Enhancements

- Task filtering (e.g., by “Not Started”, “In Progress”, “Completed”)
- Input validation (e.g., required title field)
- Kanban view toggle
- TypeScript across both frontend and backend for stronger typing
- Persistent storage with PostgreSQL via Prisma ORM

## 🏗️ Tech Stack

| Layer        | Technology        | Why It’s Used                                                        |
| ------------ | ----------------- | -------------------------------------------------------------------- |
| **Backend**  | Node.js + Express | Fast and minimalistic web framework ideal for REST APIs              |
| **Database** | PostgreSQL        | Reliable, relational, and well-supported open-source database        |
| **ORM**      | Prisma            | Type-safe database toolkit that simplifies data modeling and queries |
| **Frontend** | React (Vite)      | Lightweight and efficient for building dynamic user interfaces       |
| **Language** | TypeScript        | Provides type safety and improves maintainability                    |
| **Tooling**  | ESLint, Prettier  | Ensures clean code and consistent formatting                         |
