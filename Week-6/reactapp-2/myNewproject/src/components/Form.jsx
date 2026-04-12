import React from 'react'
import {useForm} from 'react-hook-form'
import { useState } from 'react';


function FormDemo() {
    const [users, setUsers] = useState([]);
    const {register, handleSubmit,formState:{errors}} = useForm() //Destructure three properties (register,handleSubmit,formState)
    //to register form field and handleSub,it is to handle for submission and formState is to handle validations
    const onFormSubmit = (obj) =>{
    setUsers(prev => [...prev,obj])
}


    return(
       <div className='bg-blue-500 p-3.5 m-3'>
   <div className='bg-amber-500 p-3.5 pt-2 m-7'>
    <h1 className='text-center text-3xl'>Create user Form</h1>
    {/* Firstname */}
    <form className='max-w-md mx-auto mt-10 '   onSubmit = {handleSubmit(onFormSubmit)}>
        <div className='mb-3  gap-3'>
            <label htmlFor="FirstName">FirstName</label>
            <input type="text" {...register("FirstName",{required:"Firstname required",validate:(v)=>v.trim().length !=0 || "White Space is not valid"})} id="FirstName" className='border w-full p-3'></input>
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

         {/* DOB */}
        <div className='mb-3  gap-3'>
            <label htmlFor="dob">DOB</label>
            <input type="date" {...register("dob",{required:"Date Of Birth required"})} id="dob" className='border w-full p-3'></input>
        </div>
        {/* Email Validators */}
         {
            errors.dob?.type==='required' && <p className=' text-red-500'>{errors.dob.message}</p>
        }
        
        {/* Button */}
        <button type="submit" className='block mx-auto border border-black bg-orange-100 px-6 py-2 rounded-md '>Add User</button>
    </form>
   </div>
    {/* <div className='p-3.5 pt-2 m-7 bg-pink-800 '>
     <h1 className='text-center text-3xl'>List of Users</h1>
      <div className="mt-5 space-y-3 ">
        {users.map((user, index) => (
            <div 
                key={index} 
                className="bg-white p-3 rounded-md"
            >
                <p>FirstName: {user.FirstName}</p>
                <p>Email:{user.email}</p>
                <p>DOB:{user.dob}</p>
            </div>
        ))}
    </div>

    </div> */}
    {/* List Of users */}
    <div className='p-3.5 pt-2 m-7 bg-pink-800'>
  <h1 className='text-center text-3xl text-white'>List of Users</h1>

  <table className="w-full mt-5 bg-white rounded-md break-all ">
    <thead className="bg-gray-200">
      <tr>
        <th className="p-2 text-left">First Name</th>
        <th className="p-2 text-left">Email</th>
        <th className="p-2 text-left">DOB</th>
      </tr>
    </thead>

    <tbody>
      {users.map((user, index) => (
        <tr key={index} className="border-t">
          <td className="p-2">{user.FirstName}</td>
          <td className="p-2">{user.email}</td>
          <td className="p-2">{user.dob}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
   </div>

    )
}
export default FormDemo

//required
//minlength and max length
//validate
//trim 