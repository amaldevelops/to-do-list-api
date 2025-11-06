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

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone git@github.com:amaldevelops/to-do-list-api.git
cd to-do-list-api
```

### 2. Backend Setup

### Configure Environment Variables

Create a .env file in the server directory with your database URL: i.e

```bash
DATABASE_URL="postgresql://username:password@localhost:5432/todo_db?schema=public"
PORT=5000
```

Ensure PostgreSQL is running locally and a database named todo_db is created.

### Install Back end dependencies

```bash
cd server
npm install
npx prisma migrate dev --name init
npm run dev
```

The API will start at `http://localhost:5000`

### 3. Frontend Setup

```bash
cd ../client
npm install
npm run dev
```

The frontend will run at `http://localhost:5173`
