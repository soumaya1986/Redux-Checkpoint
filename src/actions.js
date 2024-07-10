// src/actions.js
export const ADD_TASK = "ADD_TASK";
export const EDIT_TASK = "EDIT_TASK";
export const TOGGLE_TASK = "TOGGLE_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const FILTER_TASKS = "FILTER_TASKS";

export const addTask = (task) => ({ type: ADD_TASK, payload: task });
export const editTask = (task) => ({ type: EDIT_TASK, payload: task });
export const toggleTask = (id) => ({ type: TOGGLE_TASK, payload: id });
export const deleteTask = (id) => ({ type: DELETE_TASK, payload: id });
export const filterTasks = (filter) => ({
  type: FILTER_TASKS,
  payload: filter,
});
