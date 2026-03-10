import exp from 'express'
export const productApp = exp.Router() 
let products = []

//Create a new product({productid,name,brand,price})
//Read all the products
//read all product by brand
//update a product
//delete a product by id
productApp.get('/products',(req,res)=>{
    //read all the products
    //If not found return no producst available
    if(products.length === 0)
        return res.json({message:"Products not available"})
    //read all the products
    res.json({message:" All Products",payload:products })
    // return the response
})
productApp.get('/products/:id',(req,res)=>{
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
productApp.get('/products/brand/:brand', (req, res) => {
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
productApp.post('/products',(req,res)=>{
    //
    let newProduct = req.body
    products.push(newProduct)
     res.json({message:"products Added"})
})
productApp.put('/products',(req,res)=>{
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
productApp.delete('/products/:id',(req,res)=>{
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