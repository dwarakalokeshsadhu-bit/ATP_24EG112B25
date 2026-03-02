// Assignment 1: 
// -------------
// Task Management System (ToDo App Modules):
//      Building a task manager like Todoist

// Requirements:
//      Create a modular todo app with 3 separate files:

       
          
//         i. validator.js - Input validation
//                       // TODO: Export these validation functions
                      
//                       // 1. Validate task title (not empty, min 3 chars)
//                       function validateTitle(title) {
//                         // Your code here
//                       }
                      
//                       // 2. Validate priority (must be: low, medium, high)
//                       function validatePriority(priority) {
//                         // Your code here
//                       }
                      
//                       // 3. Validate due date (must be future date)
//                       function validateDueDate(date) {
//                         // Your code here
//  
// validator.js

// 1. Validate task title (not empty, min 3 chars)
export function validateTitle(title) {
  if (typeof title !== "string") return false;
  return title.trim().length >= 3;
}

// 2. Validate priority (must be: low, medium, high)
export function validatePriority(priority) {
  const allowed = ["low", "medium", "high"];
  return allowed.includes(priority);
}

// 3. Validate due date (must be future date)
export function validateDueDate(date) {
  const dueDate = new Date(date);
  const today = new Date();

  if (isNaN(dueDate.getTime())) return false;
  return dueDate > today;
}