
import express from 'express'
import { empModel } from '../models/empModel.js';

export const empApp = express.Router()

empApp.use(express.json()); 

empApp.get("/employees", async (req, res) => {
    let empList = await empModel.find()

    res.status(200).json({
        message: "Employees:",
        payload: empList
    })
})

//create new employee
/*
// empApp.post("/employee", async (req, res) => {
//     const newEmployee = req.body;

//     const newEmployeeDocument = new empModel(newEmployee);
//     const result = await newEmployeeDocument.save()

//     console.log("result:", result)

//     res.status(201).json({
//         message: "Employee created",
//         payload: result
//     })
// })*/
empApp.post("/employee", async (req, res) => {
  try {
    const newEmployee = req.body;
    const result = await new empModel(newEmployee).save();

    res.status(201).json({ message: "Employee created", payload: result });

  } catch (err) {
    console.log("SAVE ERROR:", err.message);
    res.status(500).json({ message: "Error", error: err.message });
  }
});
empApp.put("/employee/:id", async (req, res) => {
    const modifiedEmployee = req.body
    const eid = req.params.id

    const updatedEmployee = await empModel.findByIdAndUpdate(
        eid,
        { $set: modifiedEmployee },
        { new: true, runValidators: true }
    )

    if (!updatedEmployee) {
        return res.status(404).json({ message: "Employee not found" })
    }

    res.status(200).json({
        message: 'employee updated',
        payload: updatedEmployee
    })
})

//delete employee by id
empApp.delete("/employee/:id", async (req, res) => {
    const eid = req.params.id

    const deletedEmployee = await empModel.findByIdAndDelete(eid)

    if (!deletedEmployee) {
        return res.status(404).json({ message: "Employee not found" })
    }

    res.status(200).json({
        message: 'employee deleted',
        payload: deletedEmployee
    })
})