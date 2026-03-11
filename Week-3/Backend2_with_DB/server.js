//Create express application and connect to MongoDB server
//And express server contains http server other features helps us to create backend adn APIs
//Two types of drivers to connect to MongoDB server
//1. Native driver (mongodb package) - low level driver, more control, more code
//2. ODM (Object Data Modeling) library (mongoose package) - high level driver, less control, less code
//connect method receives datbase address as the argument and returns a promise, if connection is successful, 
// promise is resolved, otherwise it is rejected
import exp from 'express'
import {connect} from 'mongoose'
import { log } from 'node:console';
import {productApp} from './APIs/productAPI.js'
import { userApp } from './APIs/userAPIs.js';
import cookieParser  from "cookie-parser"
const app = exp()
//add body parser
app.use(exp.json())
//Forward req to userApp if path starts with /user-api
app.use(cookieParser())
app.use("/user-api",userApp)
app.use("/product-api",productApp)

//Connect to MongoDB server
async function connectDB() { //async function to connect to MongoDB server and for asynchronus function
    try {
        
    await connect("mongodb://localhost:27017/mydatabase"); //For Every blocking function
    //IP address: localhost or 127.0.0.1
    console.log("MongoDB connection success")
    //start servre
app.listen(4000,()=>console.log("server is running on port 4000...")  )
} catch(err) {
    console.log("Error in DB connection:",err)
}
}
connectDB();
//Error handling middleware which can execute only when error occurs in express or in any route and normal middleware has only three parameters(req,res,next)
//error =>{name,message,callstack}
// app.use((err,req,res,next)=>{
//     res.status().json({message:"error occurred",error:err.message})   ### Error handling basic version
// })
app.use((err,req,res,next)=>{
    console.log(err.name)
    //Validation error
    if(err.name==='ValidationError')
        return res.status(400).json({message:"Error occurred",error:err.message})
    
    else if(err.name==='CastError')
          return res.status(404).json({message:"Error occurred",error:err.message})
       
       res.status(500).json({message:"Error occurred",error:err.message})   
})
