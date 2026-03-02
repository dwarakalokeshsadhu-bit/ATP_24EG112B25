//Create HTTP server
import exp from 'express' // it is a default export so we can use any name and express is a module
const app = exp()  //It creates an express applicatin and returns it and "app" is a name
//Use body body parser middleware
app.use(exp.json())
//Web server is a computer installed with https server
//Set a port number
const port = 4000
app.listen(port,()=>console.log(`Server listening  port ${port}...`)) //Used Assing port number to http server
//Test Data
let products = []

//Create USERAPI(It enables interaction between applications) (REST API -Representional State Transfer)
//Route to handle GET request of the client(http://localhost:4000/users)
//Only post and put request has body and can share the resources 
//get and delete  does not support body of the request so that these two request can share data through end point 
// app.get('/users',(req,res)=>{ 
//     //Send respose to the client
//     //read all users & sen response
//     res.json({message:" All Users",payload:users })
// })
// app.get('/users/:id',(req,res)=>{ 
//     //get id from url parameter
//     let idOfUrl =Number(req.params.id) 
//     //Find index of user
//     let index = users.findIndex(userObj=>userObj.id===idOfUrl)
//     if(index===-1)
//         return res.json({message:"User Not found"})
//     //return the user if found
//     let foundUser = users.find(userObj=>userObj.id===idOfUrl)
//     return res.json(foundUser )
// })
// //Route to handle POST request of the client
// app.post('/users',(req,res)=>{
//     //Sends response to the client
//     console.log(req.body)
//     const newUser = req.body
//    //Push user into users
//    users.push(newUser)
//    //send response
//    res.json({message:"User created"})
   
// })
// // Route to handle PUT request of the client
// app.put('/users',(req,res)=>{
//     //get modified user from client {}
//     let modifiedUser = req.body
//     //get Index of existing user in users array
//    let index =  users.findIndex(userObj=>userObj.id===modifiedUser.id)
//    if(index===-1)
//     return res.json({message:"User not found"})
//     //update user with index
//     users.splice(index,1,modifiedUser)
//     //send response
//     res.json({message:"User updated"})
   
// })
// // Route to handle DELETE request of the client
// //URL to delete a user http://localhost:4000/users/2
// app.delete('/users/:id',(req,res)=>{
//    //get id of user from url parameter
//    //When client pass any data through url it is always string
//    let idOfUrl = Number(req.params.id) //returns{id:5}
//    //find index of user
//    let index = users.findIndex(userObj=>userObj.id===idOfUrl)
//    if(index===-1)
//     return res.json({message:'user not found to delete'})
//    //delete user by index
//    users.splice(index,1,)
//    //send response
//    res.json({message:"User removed"})
// })
// app.delete('/users',(req,res)=>{
//    //Finding whether there are users
//    let index = users.findIndex(userObj=>userObj.id)
//    if(index===-1)
//     return res.json({message:'user not found to delete'})
//    //delete all users
//    users.splice(0,users.length)
//    //send response
//    res.json({message:" All User removed"})
// })
//Create a new product({productid,name,brand,price})
//Read all the products
//read all product by brand
//update a product
//delete a product by id
app.get('/products',(req,res)=>{
    //read all the products
    //If not found return no producst available
    if(products.length === 0)
        return res.json({message:"Products not available"})
    //read all the products
    res.json({message:" All Products",payload:products })
    // return the response
})
app.get('/products/:id',(req,res)=>{
    let idOfUrl = Number(req.params.id) 
     let product = products.find(prodObj=>prodObj.productId)
    if(idOfUrl <= 0 || isNaN(idOfUrl))
        return res.json({message:"product ID InValid"})
    else if(products.length === 0)
        return res.json({message:"No products available"})
    else if(product.productId!=idOfUrl)
        return res.json({message:`Prduct with ID ${idOfUrl} not found`})
    let getProduct = products.find(prodObj=>prodObj.productId===idOfUrl)
    return res.json({message:`Product with id ${idOfUrl}`, payload:getProduct})
})
app.get('/products/brand/:brand', (req, res) => {
    const brand = req.params.brand;
    if (products.length === 0) {
        return res.json({ message: "No products available" });
    }

   
    const filteredProducts = products.filter(
        p => p.brand?.toLowerCase() === brand.toLowerCase()
    );


    if (filteredProducts.length === 0) {
        return res.json({
            message: `No products found for brand ${brand}`
        });
    }

    
    return res.json({
        message: `Products of brand ${brand}`,
        payload: filteredProducts
    });
});
app.post('/products',(req,res)=>{
    //
    let newProduct = req.body
    products.push(newProduct)
     res.json({message:"products Added"})
})
app.put('/products',(req,res)=>{
    let modifiedProduct = req.body
    //Finding the index of product to get modified
    let index = products.findIndex(productObj=>productObj.productId===modifiedProduct.productId)
    if(index===-1)
        return res.json({message:"Product not found"})
    //Updating the Product
    products.splice(index,1,modifiedProduct)
    //return the response
    res.json({message:"Product Updated Successfully"})

})
app.delete('/products/:id',(req,res)=>{
   //get id of user from url parameter
   //When client pass any data through url it is always string
   let idOfUrl = Number(req.params.id) //returns{id:5}
   //find index of Product
   let index = products.findIndex(userProduct=>userProduct.productId===idOfUrl)
   if(index===-1)
    return res.json({message:'Product not found to delete'})
   //delete user by index
   products.splice(index,1,)
   //send response
   res.json({message:"Product removed"})
 })