// src/components/ListTask.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Task from "./Task";
import { filterTasks } from "../actions";

function ListTask() {
  const tasks = useSelector((state) => state.tasks);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const filteredTasks = tasks.filter((task) =>
    filter === "ALL" ? true : filter === "DONE" ? task.isDone : !task.isDone
  );

  return (
    <div>
      <div className="filter-buttons">
        <button onClick={() => dispatch(filterTasks("ALL"))}>All</button>
        <button onClick={() => dispatch(filterTasks("DONE"))}>Done</button>
        <button onClick={() => dispatch(filterTasks("NOT_DONE"))}>
          Not Done
        </button>
      </div>
      <ul className="task-list">
        {filteredTasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}

export default ListTask;
