import { config } from "dotenv";
import express from "express";
import { connect } from "mongoose";
import { empApp } from "./APIs/EmpAPI.js";
import cors from "cors";

config();

const app = express();
app.use(express.json());
app.use(cors({
  origin:['http://localhost:5173']
}))
app.use("/emp-api", empApp);

const port = process.env.PORT || 4000;

async function connectDB() {
  try {
    console.log("DB URL:", process.env.MONGO_URI);

    await connect(process.env.MONGO_URI);

    console.log("MongoDB connection success");

    app.listen(port, () =>
      console.log(`server is running on port ${port}...`)
    );
  } catch (err) {
    console.log("Error in DB connection:", err);
  }
}

connectDB();

//Error handling Middle wares
app.use((err,req,res,next)=>{
    console.log(err.name)
    //Validation error
    if(err.name==='ValidationError')
        return res.status(400).json({message:"Error occurred",error:err.message})
    
    else if(err.name==='CastError')
          return res.status(404).json({message:"Error occurred",error:err.message})
       
       res.status(500).json({message:"Error occurred",error:err.message})   
})
