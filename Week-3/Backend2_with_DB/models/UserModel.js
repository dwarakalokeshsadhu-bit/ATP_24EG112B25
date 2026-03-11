import {Schema,model} from 'mongoose'
//Create User schema (Usrname,password,email,age)
const userSchema = new Schema( {
    //structure of user resource
    username:{     
        //Validation rules                                              //string -- dataType
        type:String,                                                    //String--mongoose
        required:[true,"Username is required"],
        minLength:[4,"Min length of username is 4 characters"],
        maxLength:[7,"Username character exceeds"],
        unique:[true,"Username already exists"]              
    },
    password:{
        type:String,
        required:[true,'Password required']
    },
    email:{
        type:String,
        required:[true,'Email required'],
        unique:[true,'Email already exists']

    },
    age:{
         type:Number
    }

},{
    versionKey:false,
    timestamps:true,

});
//  create User model 
export const userModel = model("users",userSchema)