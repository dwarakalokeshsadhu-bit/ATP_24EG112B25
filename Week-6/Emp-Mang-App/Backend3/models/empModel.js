import { Schema, model } from "mongoose"
const employeeSchema= new Schema({
    //Structure of employee resource
    name:{
        type:String,
        required:[true,"Name is required"],
    },
    email:{
        type:String,
        required:[true,"Email is required"]
    },
    mobile:{
        type:Number,
        required:[true,"Mobile is required"],
    },
    designation:{
        type:String,
        required:[true,"Designation is required"],
    },
    companyname:{
        type:String,
        required:[true,"CompanyName is required"],
    },
},
{    strict:"throw",
    versionKey:false,
    timestamps:true
})

export const empModel=model('Employee',employeeSchema)