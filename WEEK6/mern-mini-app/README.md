# MERN Mini App

A basic MERN stack application for performing CRUD operations.

## Tech Stack

- MongoDB
- Express.js
- React.js
- Node.js

## Folder Structure

mern-mini-app/
│
├── BackendEmp/      # Backend (Node + Express)
├── frontend/        # Frontend (React)
└── README.md

## Requirements

- Node.js
- npm
- MongoDB (running locally or connected)

## How to Run

### 1. Clone the repository

git clone <your-repo-url>
cd mern-mini-app

### 2. Start Backend

cd BackendEmp
npm install
npm start

### 3. Start Frontend

cd ../frontend
npm install
npm start

## API Routes

GET     /api/items        - Get all data  
POST    /api/items        - Create new data  
PUT     /api/items/:id    - Update data  
DELETE  /api/items/:id    - Delete data  

## Notes

- Make sure MongoDB is running before starting backend  
- Start backend first, then frontend  
- Port and database connection are defined in the code  

## License

For academic use only