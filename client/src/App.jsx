import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch tasks from backend
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch(
          "https://to-do-list-api-kh03.onrender.com/tasks"
        );
        if (!response.ok) throw new Error("Failed to fetch tasks");
        const data = await response.json();
        // API returns { tasks: [...] }, so extract the array
        setTasks(Array.isArray(data.tasks) ? data.tasks : []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  // Compute basic stats
  const statusCounts = tasks.reduce((acc, task) => {
    acc[task.task_status] = (acc[task.task_status] || 0) + 1;
    return acc;
  }, {});

  const totalTasks = tasks.length;
  const completedTasks = statusCounts.complete || 0;
  const percentCompleted =
    totalTasks > 0 ? ((completedTasks / totalTasks) * 100).toFixed(2) : 0;

  return (
    <>
      <h1>To Do List Front End</h1>

      {/* Stats Section */}
      <div className="stats">
        <h2>Task Stats</h2>
        <p>Total tasks: {totalTasks}</p>
        <p>
          Completed: {completedTasks} ({percentCompleted}%)
        </p>
        {Object.entries(statusCounts).map(([status, count]) => (
          <p key={status}>
            {status.charAt(0).toUpperCase() + status.slice(1)}: {count}
          </p>
        ))}
      </div>

      {/* Task List */}
      <div className="tasks">
        <h1>Tasks</h1>
        {loading && <p>Loading tasks...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {!loading && !error && tasks.length === 0 && <p>No tasks found</p>}
        {!loading && !error && tasks.length > 0 && (
          <ul>
            {tasks.map((task) => (
              <li key={task.task_id}>
                <strong>Task ID: {task.task_id} | </strong>{" "}
                <strong>Task Title: {task.task_title} | </strong>{" "}
                {task.task_description || "No description"} |{" "}
                <em>Task Status: {task.task_status}</em>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Tech Stack */}
      <div>
        <h3>Front End Tech Stack</h3>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    </>
  );
}

export default App;
