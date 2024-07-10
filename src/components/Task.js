// src/components/Task.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask, toggleTask, deleteTask } from "../actions";

function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (editedDescription.trim()) {
      dispatch(editTask({ ...task, description: editedDescription }));
      setIsEditing(false);
    } else {
      alert("Description cannot be empty");
    }
  };

  return (
    <li className={`task-item ${task.isDone ? "completed" : ""}`}>
      {isEditing ? (
        <form onSubmit={handleEditSubmit} className="edit-form">
          <input
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <button type="submit">Save</button>
        </form>
      ) : (
        <>
          <span onClick={() => dispatch(toggleTask(task.id))}>
            {task.description}
          </span>
          <div className="task-actions">
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => dispatch(deleteTask(task.id))}>
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default Task;
