# Create Backend with Employee AΡΙ
Create HTTP Server

Create Employee Schema(

name,email,mobile, designation & companyName ) and model

Define REST API routes for


Create Employee

Read all employees

Edit employee

Delete Exployee


###Steps for creation
1. Create Project
mkdir Backend3
cd Backend3
npm init -y
2. Install Dependencies
npm install express mongoose dotenv
npm install nodemon --save-dev
3. Enable ES Modules

Edit package.json and add:

"type": "module"
4. Create Folder Structure
Backend3/
│
├── APIs/
│   └── EmpAPI.js
│
├── models/
│   └── empModel.js
│
├── .env
├── server.js
├── package.json
5. Setup MongoDB
Option A: Local MongoDB

Run:

mongod

Connection URL:

mongodb://127.0.0.1:27017/employeesdb
Option B: MongoDB Atlas

Use your cluster URL:

mongodb+srv://username:password@cluster.mongodb.net/employeesdb
6. Create .env
PORT=4000
MONGO_URI=mongodb://127.0.0.1:27017/employeesdb
7. Create Model (models/empModel.js)
import { Schema, model } from "mongoose";

const employeeSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: Number, required: true },
  designation: { type: String, required: true },
  companyname: { type: String, required: true }
}, {
  versionKey: false,
  timestamps: true
});

export const empModel = model("Employee", employeeSchema);
8. Create API (APIs/EmpAPI.js)
import exp from 'express'
import { empModel } from '../models/empModel.js';

export const empApp = exp.Router()

empApp.use(exp.json()); 

// GET all employees
empApp.get("/employees", async (req, res) => {
  let empList = await empModel.find();
  res.status(200).json({ message: "Employees:", payload: empList });
});

// CREATE employee
empApp.post("/employee", async (req, res) => {
  const newEmployee = req.body;
  const newEmployeeDocument = new empModel(newEmployee);
  await newEmployeeDocument.save();
  res.status(201).json({ message: "Employee created" });
});

// UPDATE employee
empApp.put("/employee/:id", async (req, res) => {
  const modifiedEmployee = req.body;
  const eid = req.params.id;

  const updatedEmployee = await empModel.findByIdAndUpdate(
    eid,
    { $set: { ...modifiedEmployee } },
    { new: true, runValidators: true }
  );

  res.status(200).json({ message: 'employee updated', payload: updatedEmployee });
});

// DELETE employee
empApp.delete("/employee/:id", async (req, res) => {
  const eid = req.params.id;

  const deleteEmployee = await empModel.findByIdAndDelete(eid);

  if (!deleteEmployee) {
    return res.status(404).json({ message: "Employee not found" });
  }

  res.status(200).json({ message: 'employee deleted', payload: deleteEmployee });
});
9. Create Server (server.js)
import { config } from 'dotenv';
import express from 'express';
import { connect } from 'mongoose';
import { empApp } from "./APIs/EmpAPI.js";

config();

const app = express();
app.use(express.json());

app.use('/emp-api', empApp);

const port = process.env.PORT || 4000;

async function connectDB() {
  try {
    await connect(process.env.MONGO_URI);
    console.log("MongoDB connected");

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });

  } catch (err) {
    console.log("Error in DB connection:", err);
  }
}

connectDB();
10. Run Server
npx nodemon server.js

OR

node server.js
11. Test API

Base URL:

http://localhost:4000/emp-api

Example:

POST http://localhost:4000/emp-api/employee
Content-Type: application/json

{
  "name": "Test User",
  "email": "test@example.com",
  "mobile": 9999999999,
  "designation": "Developer",
  "companyname": "ABC"
}
