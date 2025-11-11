# To Do List API & Frontend

# Introduction

A clean and full-stack To-Do List Application built with Node.js, PostgreSQL, Prisma ORM, and React.
This project showcases RESTful API design, database integration, and a responsive frontend for managing tasks efficiently.

## Source Code

[Source Code](https://github.com/amaldevelops/to-do-list-api)

Please refer local installation instructions below on how to set it up on your local machine. Since this was developed using a Linux machine instructions may differ from your operating system.

## Live Demo

Please note as the demo version is hosted on free instances of the below services they will spin down with inactivity, which can delay requests by 2 minutes or more.

- (https://to-do-list-api-kh03.onrender.com/) : Backend is hosted on Render.com (as output is given using JSON, this can be tested using the browser or using postman if you wish to test all the http methods) i.e. (https://to-do-list-api-kh03.onrender.com/tasks)
- (https://neon.com/) PostgreSQL database is hosted on
- (https://www.amalk.au/to-do-list-api/) : Front End is hosted on [githubpages.com](https://docs.github.com/en/pages):

### 🏗️ Tech Stack

| Layer        | Technology        | Why It’s Used                                                                                                                                                                                                    |
| ------------ | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Backend**  | Node.js + Express | Node.js allows running JavaScript on the server, making it easy to share code with the frontend. Express is minimal and fast, perfect for building REST APIs with routing, middleware, and JSON handling.        |
| **Database** | PostgreSQL        | PostgreSQL is a robust relational database that supports complex queries, relationships, and ACID compliance, ensuring data integrity. It’s open-source, widely used, and integrates well with ORMs like Prisma. |
| **ORM**      | Prisma            | Prisma simplifies database interactions with type-safe queries, schema management, and migrations. It reduces boilerplate code and minimizes runtime errors.                                                     |
| **Frontend** | React (Vite)      | React provides a component-based architecture for building dynamic UIs. Vite offers fast development builds and hot module replacement, making development smoother and faster.                                  |
| **Language** | JavaScript        | Using JavaScript across frontend and backend enables a unified codebase, easy sharing of data structures, and faster development. Type checking (optional with TypeScript) further enhances reliability.         |
| **Tooling**  | ESLint, Prettier  | ESLint enforces coding standards and catches potential errors early. Prettier ensures consistent code formatting, improving readability and maintainability across the team.                                     |

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

API can be accessed using these endpoints
i.e. : (https://to-do-list-api-kh03.onrender.com/tasks/7) using postman to update or delete tasks PUT/DELETE

| Method   | Endpoint     | Description                              |
| -------- | ------------ | ---------------------------------------- |
| `GET`    | `/tasks`     | Fetch all tasks                          |
| `POST`   | `/tasks`     | Create a new task                        |
| `PUT`    | `/tasks/:id` | Update task details or mark as completed |
| `DELETE` | `/tasks/:id` | Delete a specific task                   |

### Example **POST /tasks** Request

```json
{
  "title": "Write documentation",
  "description": "Add setup guide and API docs",
  "status": "Not Started"
}
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

### PostgreSQL setup

- task_id : Auto-incremented unique identifier (SERIAL PRIMARY KEY) as an validation
- task_title : Title of the task (VARCHAR(255)), cannot be null as an validation.
- task_description : Optional detailed description of the task (TEXT).
- task_status : Current status of the task (task_status_enum), defaults to not-started. Possible values: `not-started | started | complete | deleted`
- task_owner : Owner or creator of the task (VARCHAR(255)), cannot be null as an validation.
- created_at: Timestamps for task creation, defaulting to the current time.
- updated_at: Timestamps for task last update, defaulting to the current time.

### 💻 Frontend Information

- Task list view displaying task ID, title, description, and status
- Basic statistics: total tasks, completed percentage, etc.
- Responsive, simple, and intuitive interface
- Developed using React

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

### 🔮 Future Enhancements

✅ User Authentication – Implement JWT-based login to support multiple users.

🕒 Task Deadlines & Reminders – Add due dates with optional notifications.

📱 Mobile-Friendly Layout – Ensure responsive design for all screen sizes.

☁️ Cloud Deployment – Deploy reliably using platforms like Render, Railway, or Vercel.

🔍 Search & Sorting – Allow tasks to be searched and sorted by status, title, or date.

📊 Task Activity Tracking – Monitor task progress and completion over time.

⚡ Advanced Task Management

Add, delete, and edit tasks directly from the interface

Filtering by status (e.g., “Not Started”, “In Progress”, “Completed”)

Input validation (e.g., enforce required fields like task title)

Kanban-style board toggle for visual task management

📝 Stronger Typing – Introduce TypeScript across frontend and backend for safer, more maintainable code.

## ⚙️ Local Setup Instructions

### 1. Clone the Repository

```bash
git clone git@github.com:amaldevelops/to-do-list-api.git
cd to-do-list-api
npm install
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

The API will start at `http://localhost:4000`

### 3. Frontend Setup

```bash
cd ../client
npm install
npm run dev
```

The frontend will run at `http://localhost:5173`
