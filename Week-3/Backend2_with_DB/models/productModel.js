import { Schema, model } from "mongoose"

const productSchema = new Schema({

  productId:{
     type:Number,
     required:[true,"ProductId is required"]
  },

  productName:{
     type:String,
     required:[true,"Product Name is required"]
  },

  price:{
     type:Number,
     min:[10000,"Minimum purchase is 10000"],
     max:[50000,"Maximum purchase is 50000"]
  },

  brand:{
     type:String,
     required:[true,"Brand name is required"]
  }

})

export const productModel = model("products", productSchema)