import React from 'react'
import {useForm} from 'react-hook-form'

function FormDemo() {
    const {register, handleSubmit,formState:{errors}} = useForm() //Destructure three properties (register,handleSubmit,formState)
    //to register form field and handleSub,it is to handle for submission and formState is to handle validations
const onFormSubmit = (obj) =>{
    console.log("Form data is",obj)
    

}
console.log(errors)

    return(
   <div >
    <h1 className='text-center text-3xl'>FormDemo</h1>
    {/* Username */}
    <form className='max-w-md mx-auto mt-10 '   onSubmit = {handleSubmit(onFormSubmit)}>
        <div className='mb-3  gap-3'>
            <label htmlFor="UserName">UserName</label>
            <input type="text" {...register("UserName",{required:"Username required",validate:(v)=>v.trim().length !=0 || "White Space is not valid"})} id="UserName" className='border w-full p-3'></input>
        </div>
         {/*User name  Validating Errors */}
        {
            errors.UserName?.type==='required' && <p className=' text-red-500'>{errors.UserName.message}</p>
        }
         {
            errors.UserName?.type==='minLength' && <p className=' text-red-500'>Minimum length is 4</p>
        }
        {
            errors.UserName?.type==='validate' && <p className='text-red-500'>White space is not valid</p>
        }
        
      {/* Email */}
        <div className='mb-3  gap-3'>
            <label htmlFor="email">email</label>
            <input type="email" {...register("email",{required:"Email required",validate:(v)=>v.trim().length !=0 || "White Space is not valid"})} id="email" className='border w-full p-3'></input>
        </div>
        {/* Email Validators */}
         {
            errors.email?.type==='required' && <p className=' text-red-500'>{errors.email.message}</p>
        }
         {
            errors.email?.type==='minLength' && <p className=' text-red-500'>Minimum length is 4</p>
        }
        {
            errors.email?.type==='validate' && <p className='text-red-500'>White space is not valid</p>
        }
       
        {/* Button */}
        <button type="submit" className='block mx-auto border border-black bg-amber-400 px-6 py-2 rounded-md '>Submit</button>
    </form>
   </div>
    )
}
export default FormDemo

//required
//minlength and max length
//validate
//trim 