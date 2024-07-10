// src/reducers.js
import {
  ADD_TASK,
  EDIT_TASK,
  TOGGLE_TASK,
  DELETE_TASK,
  FILTER_TASKS,
} from "./actions";

const initialState = {
  tasks: [],
  filter: "ALL",
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { ...action.payload, id: Date.now(), isDone: false },
        ],
      };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? { ...task, ...action.payload } : task
        ),
      };
    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload ? { ...task, isDone: !task.isDone } : task
        ),
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case FILTER_TASKS:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

export default taskReducer;
