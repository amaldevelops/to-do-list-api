# To Do List API & Frontend

# Introduction

A clean and full-stack To-Do List Application built with Node.js, PostgreSQL, Prisma ORM, and React.
This project showcases RESTful API design, database integration, and a responsive frontend for managing tasks efficiently.

## Source Code

`https://github.com/amaldevelops/to-do-list-api`

## Live Demo

### 🏗️ Tech Stack

| Layer        | Technology        | Why It’s Used                                                        |
| ------------ | ----------------- | -------------------------------------------------------------------- |
| **Backend**  | Node.js + Express | Fast and minimalistic web framework ideal for REST APIs              |
| **Database** | PostgreSQL        | Reliable, relational, and well-supported open-source database        |
| **ORM**      | Prisma            | Type-safe database toolkit that simplifies data modeling and queries |
| **Frontend** | React (Vite)      | Lightweight and efficient for building dynamic user interfaces       |
| **Language** | TypeScript        | Provides type safety and improves maintainability                    |
| **Tooling**  | ESLint, Prettier  | Ensures clean code and consistent formatting                         |

## 🧩 Backend (REST API) Information

The backend is implemented using Node.js and Express, with PostgreSQL as the primary database.
Database operations are managed through Prisma ORM, which provides type-safe queries, schema migrations, and efficient interaction with the database layer.

The API follows REST (Representational State Transfer) architectural principles,a standardized approach to building stateless, resource oriented web services. Each endpoint represents a specific resource (e.g.tasks) and supports conventional HTTP methods such as:

GET – Retrieve data

POST – Create new records

PUT – Update existing records

DELETE – Remove records

This design ensures scalability, maintainability, and interoperability across different clients and services.

### 🔌 API Endpoints

| Method   | Endpoint     | Description                              |
| -------- | ------------ | ---------------------------------------- |
| `GET`    | `/tasks`     | Fetch all tasks                          |
| `POST`   | `/tasks`     | Create a new task                        |
| `PUT`    | `/tasks/:id` | Update task details or mark as completed |
| `DELETE` | `/tasks/:id` | Delete a specific task                   |

### 💻 Frontend Information

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

### Example **POST /tasks** Request

```json
{
  "title": "Write documentation",
  "description": "Add setup guide and API docs",
  "status": "Not Started"
}
```

### Project folder structure

```bash
todo-list-app/
├── client/ # React frontend
│ ├── src/
│ ├── public/
│ └── package.json
│
├── server/ # Node.js + Express + Prisma backend
│ ├── src/
│ │ ├── index.ts
│ │ ├── routes/
│ │ ├── controllers/
│ │ └── prisma/
│ ├── prisma/
│ │ └── schema.prisma
│ └── package.json
│
└── README.md
```

### 📊 Example Task Object

```json
{
  "id": 1,
  "title": "Learn Prisma ORM",
  "description": "Read documentation and try CRUD examples",
  "status": "In Progress",
  "createdAt": "2025-11-05T12:30:00.000Z"
}
```

### 🔮 Future Enhancements

✅ User authentication (JWT)

🕒 Task deadlines and reminders

📱 Mobile-friendly layout

☁️ Cloud deployment (Render, Railway, or Vercel)

🔍 Search and sorting capabilities

📊 Task activity tracking

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
