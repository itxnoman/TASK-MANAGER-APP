import React, { useEffect, useState } from "react";
import axios from "axios";
import TaskItem from "./components/TaskItem";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const fetchTasks = async () => {
    const res = await axios.get("http://localhost:5000/api/tasks");
    setTasks(res.data);
  };

  const addTask = async () => {
    if (title.trim()) {
      await axios.post("http://localhost:5000/api/tasks", { title });
      setTitle("");
      fetchTasks();
    }
  };

  const updateTask = async (id, updated) => {
    await axios.put(`http://localhost:5000/api/tasks/${id}`, updated);
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/api/tasks/${id}`);
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>

      <div className="flex mb-4">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="flex-grow border px-2 py-1 rounded-l"
          placeholder="New Task"
        />
        <button onClick={addTask} className="bg-blue-600 text-white px-4 py-1 rounded-r">
          Add
        </button>
      </div>

      {tasks.map((task) => (
        <TaskItem
          key={task._id}
          task={task}
          onUpdate={updateTask}
          onDelete={deleteTask}
        />
      ))}
    </div>
  );
};

export default App;


 