//Create min express appliation(seperate route)
import exp from 'express'
//Main Application contains http instance and mini application 
export const productApp = exp.Router()
import { productModel } from '../models/productModel.js';
productApp.use(exp.json()); 
//Define Product rest api routes
//Adding a product
productApp.post("/products",async(req,res)=>{
    //get new product obj from req
    const newproduct = req.body;
    //create new Product document
   const newProductDocument = new productModel(newproduct)
         //save (this save is equal to one insert methoda and this documnet is created in DB)
         await newProductDocument.save()
      //send responce
      //Status code are used like 200,404,201(Successfull creation of document)
      res.status(201).json({message:"Product created",payload:newproduct})
     //When an error occurs is is in html format and we want to send it in json format
})
// //Read all prodcuts
productApp.get("/products",async(req,res)=>{
    //read all products from db
    let productList = await productModel.find()
    //send response
    res.status(200).json({message:"products:",payload:productList})
    
})

//read a product by product id
productApp.get("/products/:id",async(req,res)=>{
//Read object id from req params
const uid = Number(req.params.id)
//find product by id
const productObj = await productModel.findById(uid)
//If product not found
if(productObj===null){ {
  return  res.status(404).json({message:"product not found"})
}
//use findone method to read a document with non object id fields
//Use find by id to read documents with objectId
//send responce
res.status(200).json({message:"Product",payload:productObj})

}}) 
//Update a product by id
productApp.put("/products/:id",async(req,res)=>{
    //get modified product from req
    const modifiedProduct = req.body;
    const uid = req.params.id;
    //find product by id update user
   const updatedProduct = await productModel.findByIdAndUpdate(uid,{$set:modifiedProduct},{returnDocument:'after',runValidators:true}) //It returns modified document
    //send res

    res.status(200).json({message:"product Updated:",payload:updatedProduct})
})
//deleting a product by id
productApp.delete("/products/:id",async(req,res)=>{
    //get product 
    const requiredProduct = req.body;
    const uid = req.params.id
    //find the product by id & delete
    const deleteproduct = await productModel.findByIdAndDelete(uid,{new:true}) 
    //send res
    if(!deleteproduct)
    return res.status(404).json({message:"Product not found for deletion"})
     res.status(200).json({message:"product deleted",payload:deleteproduct})
})
// //Deleting all products
productApp.delete("/products",async(req,res)=>{
    //Deleting all products
    const deletedproduct = await productModel.deleteMany({})
    if(deletedproduct.deletedCount === 0) 
        return res.status(404).json({message:"Products not found for deletion"})
    //Send responce
    res.status(200).json({message:"products deleted:",payload:deletedproduct})
})