//Create min express appliation(seperate route)
import exp from 'express'
//Main Application contains http instance and mini application 
export const userApp = exp.Router()
import { userModel } from '../models/UserModel.js';
import {hash,compare} from "bcryptjs"
import jwt from 'jsonwebtoken'
import {verifyToken } from "../middlewares/verifyToken.js" 
const {sign} = jwt //Encoding the token
//Define user rest api routes
//User  Authentication API
userApp.post('/auth',async(req,res)=>{
    //get user cred obj from client
    const {email,password} = req.body;
    //Verify email
    let user = await userModel.findOne({email:email})
    //if Email is not existed
    if(user===null)
        return res.status(404).json({message:"Invalid Email"})
    //compare passwords
    let result = await compare(password,user.password)
    if(!result) 
        return res.status(400).json({message:"Wrong Password"})
    //If password is correct 
    //create token(jsonwebtoken -jwt--jaat)
   const signedToken =  sign({email:user.email},"abcdef",{expiresIn:"1h"})
    //send token as httpOnly cookie
    res.cookie("token",signedToken,{
        httpOnly:true,
        sameSite:"lax" ,//relaxed restriction
        secure:false

    })
    //Send response
    res.status(200).json({message:"login Success:",payload:user})
})
//create new user
userApp.post("/users",async(req,res)=>{
    //get new user obj from req
 
    const newUser = req.body;
    //create new user document
    //hash the password
   const hashedPassword = await hash(newUser.password,10)
    //replace plain password with hashed password
    newUser.password = hashedPassword;
      const newUserDocument = new userModel(newUser)
      //save (this save is equal to one insert methoda and this documnet is created in DB)
      await newUserDocument.save()
      //send responce
      //Status code are used like 200,404,201(Successfull creation of document)
      res.status(201).json({message:"User created"})
     //When an error occurs is is in html format and we want to send it in json format
})
//Read all users (protected route)
userApp.get("/users",verifyToken,async(req,res)=>{
    //read all users from db
    let usersList = await userModel.find()
    //send response
    res.status(200).json({message:"user:",payload:usersList})
})
//read a username by object id
userApp.get("/users/:id",async(req,res)=>{
//Read object id from req params
const uid = req.params.id
//find user by id
const userObj = await userModel.findById(uid)
//If user not found
if(userObj==null){ 
  return  res.status(404).json({message:"User not found"})

//use findone method to read a document with non object id fields
//Use find by id to read documents with objectId
//send responce
res.status(200).json({message:"user",payload:userObj})

}}) 
//Update a user by id (protected route)
userApp.put("/users/:id",verifyToken,async(req,res)=>{
    //get modified user from req
    const modifiedUser = req.body;
    const uid = req.params.id;
    //find user by id update user
   const updatedUser = await userModel.findByIdAndUpdate(uid,{$set:modifiedUser},{returnDocument:'after',runValidators:true}) //It returns modified document
    //send res
    res.status(200).json({message:"user Updated:",payload:updatedUser})
})
//deleting a user by id
userApp.delete("/users/:id",async(req,res)=>{
    //get user 
    
    const uid = req.params.id
    //find the user by id & delete
    const deleteUser = await userModel.findByIdAndDelete(uid,{new:true}) 
    //send res
    if(!deleteUser)
    return res.status(404).json({message:"User not found for deletion"})
     res.status(200).json({message:"User deleted",payload:deleteUser})
})
//Deleting all users
userApp.delete("/users",verifyToken,async(req,res)=>{
    //Deleting all users
    const deletedUser = await userModel.deleteMany({})
    if(deletedUser.deletedCount === 0) 
        return res.status(404).json({message:"Users not found for deletion"})
    //Send responce
    res.status(200).json({message:"user deleted:",payload:deletedUser})
})
//app.use(verifyToken) -->every req {Application level middleWares}
//userApp.get(path,verifyToken,req-handler) {Route level middleWares}


