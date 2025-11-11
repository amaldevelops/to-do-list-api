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
          "https://to-do-list-api-kh03.onrender.com/"
        );
        if (!response.ok) throw new Error("Failed to fetch tasks");
        const data = await response.json();
        setTasks(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  return (
    <>
      <h1>To Do List Front End</h1>

      <div className="tasks">
        {loading && <p>Loading tasks...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {!loading && !error && tasks.length === 0 && <p>No tasks found</p>}
        {!loading && !error && tasks.length > 0 && (
          <ul>
            {tasks.map((task) => (
              <li key={task.task_id}>
                <strong>{task.task_title}</strong> -{" "}
                {task.task_description || "No description"} -{" "}
                <em>{task.task_status}</em>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <p>Front End Tech Stack</p>
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
