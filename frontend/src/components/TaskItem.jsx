
import React, { useState } from "react";

const TaskItem = ({ task, onUpdate, onDelete }) => {
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  const handleUpdate = () => {
    if (newTitle.trim()) {
      onUpdate(task._id, { title: newTitle });
      setEditing(false);
    }
  };

  return (
    <div className="flex items-center justify-between border-b py-2">
      {editing ? (
        <input
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="flex-grow border px-2 py-1 mr-2"
        />
      ) : (
        <span
          onClick={() => onUpdate(task._id, { completed: !task.completed })}
          className={`flex-grow cursor-pointer ${
            task.completed ? "line-through text-gray-400" : ""
          }`}
        >
          {task.title}
        </span>
      )}

      {editing ? (
        <button
          onClick={handleUpdate}
          className="text-green-600 hover:text-green-800 mr-2"
        >
          Save
        </button>
      ) : (
        <button
          onClick={() => setEditing(true)}
          className="text-blue-600 hover:text-blue-800 mr-2"
        >
          Update
        </button>
      )}

      <button
        onClick={() => onDelete(task._id)}
        className="text-red-600 hover:text-red-800"
      >
        Delete
      </button>
    </div>
  );
};

export default TaskItem;


 