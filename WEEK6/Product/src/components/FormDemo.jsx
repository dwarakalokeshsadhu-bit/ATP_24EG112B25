import { set, useForm } from "react-hook-form"
import { useState } from "react";

function FormDemo(){
    const {register,handleSubmit,formState:{errors}}=useForm() // from state is for validating the form


    let [users,setUsers] = useState([]);

    const updateUser=(obj)=>{
        setUsers([...users,obj])
    }
    // from submit function
    const onSubmit = (obj)=>{
        console.log(obj);
        updateUser(obj);
        
    }

    return(
        <div className="items-center">
        <div className="items-center" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="max-w-md mx-auto mt-10 text-5xl">User Form</h1>


            <form className="max-w-md mx-auto mt-10" >
                <div className="mb-3">
                    <label htmlFor="fullname">FullName</label>
                <input type="text" id="username" {...register("fullname",
                    {
                        required:"name required",
                        validate:(v)=>v.trim().length!==0 || "White space is invalid",
                        minLength:4,
                       // maxLength:6
                    })} 
                className="wx-full p-3 border block" />

                {/* username error validation messages */}
                {errors.fullname?.type==="required" && <p className="text-red-600">*{errors.fullname.message}</p>}
                {errors.fullname?.type==="minLength" && <p className="text-red-600">*Fullname should have atleast 4 characters</p>}
                {errors.fullname?.type==="validate" && <p className="text-red-600">*{errors.fullname.message}</p>}
                {/* {errors.username?.type==="maxLength" && <p className="text-red-600">*Username should have atmost 6 characters</p>} */}
                </div>


                <div className="mb-3">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" {...register("email",
                    {
                        required:"email is required",
                        validate:(v)=>v.trim().length!==0 || "White space is invalid"
                    }
                )} className="wx-full p-3 border block" />

                {errors.email?.type==="required" && <p className="text-red-600">*{errors.email.message}</p>}
                {errors.email?.type==="validate" && <p className="text-red-600">*{errors.email.message}</p>}
                </div>

                <div className="mb-3">
                <label htmlFor="dob">Date of Birth</label>
                <input type="date" id="dob" {...register("dob",
                    {
                        required:"dob is required"
                    }
                )} className="wx-full p-3 border block" />

                {errors.dob?.type==="required" && <p className="text-red-600">*{errors.dob.message}</p>}
                </div>


                <button type="submit" className="p-2 bg-amber-400">Submit</button>
            </form>
        </div>
        {/* TABLE */}
    <div className="mt-10 w-full flex justify-center">
        <table className="w-[700px] border border-collapse">
            <thead className="bg-gray-200">
                <tr>
                    <th className="p-2 border">FirstName</th>
                    <th className="p-2 border">Email</th>
                    <th className="p-2 border">Date of Birth</th>
                </tr>
            </thead>

            <tbody>
                {users.map((u, index) => (
                    <tr key={index} className="text-center hover:bg-gray-100">
                        <td className="p-2 border">{u.fullname}</td>
                        <td className="p-2 border">{u.email}</td>
                        <td className="p-2 border">{u.dob}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>

        </div>
    )
}

export default FormDemo