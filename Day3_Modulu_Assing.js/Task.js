// task.js

import {
  validateTitle,
  validatePriority,
  validateDueDate
} from "./Validator.js";

const tasks = [];
let idCounter = 1;

// 1. Add new task
export function addTask(title, priority, dueDate) {
  if (!validateTitle(title)) {
    return "Error: Invalid title";
  }

  if (!validatePriority(priority)) {
    return "Error: Invalid priority";
  }

  if (!validateDueDate(dueDate)) {
    return "Error: Invalid due date";
  }

  const task = {
    id: idCounter++,
    title,
    priority,
    dueDate,
    completed: false
  };

  tasks.push(task);
  return "Task added successfully";
}

// 2. Get all tasks
export function getAllTasks() {
  return tasks;
}

// 3. Mark task as complete
export function completeTask(taskId) {
  const task = tasks.find(t => t.id === taskId);

  if (!task) {
    return "Error: Task not found";
  }

  task.completed = true;
  return "Task marked as complete";
}