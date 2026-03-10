//create mini -express app(seperate Router) for users
import exp from 'express'
export const userApp = exp.Router()
// Create USERAPI(It enables interaction between applications) (REST API -Representional State Transfer)
// Route to handle GET request of the client(http://localhost:4000/users)
// Only post and put request has body and can share the resources 
// get and delete  does not support body of the request so that these two request can share data through end point 
userApp.get('/users',(req,res)=>{ 
    //Send respose to the client
    //read all users & sen response
    res.json({message:" All Users",payload:users })
})
userApp.get('/users/:id',(req,res)=>{ 
    //get id from url parameter
    let idOfUrl =Number(req.params.id) 
    //Find index of user
    let index = users.findIndex(userObj=>userObj.id===idOfUrl)
    if(index===-1)
        return res.json({message:"User Not found"})
    //return the user if found
    let foundUser = users.find(userObj=>userObj.id===idOfUrl)
    return res.json(foundUser )
})
//Route to handle POST request of the client
userApp.post('/users',(req,res)=>{
    //Sends response to the client
    console.log(req.body)
    const newUser = req.body
   //Push user into users
   users.push(newUser)
   //send response
   res.json({message:"User created"})
   
})
// Route to handle PUT request of the client
userApp.put('/users',(req,res)=>{
    //get modified user from client {}
    let modifiedUser = req.body
    //get Index of existing user in users array
   let index =  users.findIndex(userObj=>userObj.id===modifiedUser.id)
   if(index===-1)
    return res.json({message:"User not found"})
    //update user with index
    users.splice(index,1,modifiedUser)
    //send response
    res.json({message:"User updated"})
   
})
// Route to handle DELETE request of the client
//URL to delete a user http://localhost:4000/users/2
userApp.delete('/users/:id',(req,res)=>{
   //get id of user from url parameter
   //When client pass any data through url it is always string
   let idOfUrl = Number(req.params.id) //returns{id:5}
   //find index of user
   let index = users.findIndex(userObj=>userObj.id===idOfUrl)
   if(index===-1)
    return res.json({message:'user not found to delete'})
   //delete user by index
   users.splice(index,1,)
   //send response
   res.json({message:"User removed"})
})
userApp.delete('/users',(req,res)=>{
   //Finding whether there are users
   let index = users.findIndex(userObj=>userObj.id)
   if(index===-1)
    return res.json({message:'user not found to delete'})
   //delete all users
   users.splice(0,users.length)
   //send response
   res.json({message:" All User removed"})
})