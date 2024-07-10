// src/components/AddTask.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../actions";

function AddTask() {
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim()) {
      dispatch(addTask({ description }));
      setDescription("");
    } else {
      alert("Description cannot be empty");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Add new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTask;
