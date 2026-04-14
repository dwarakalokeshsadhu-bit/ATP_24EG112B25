import { useState}  from "react"
import { useForm } from 'react-hook-form'
import { useLocation } from 'react-router'
import { useEffect } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router'


function EditEmployee() {

  const { register, handleSubmit, formState: { errors }, setValue} = useForm() //setValue used for getting values into the form 
  //get data from empObj from naviagte hook
  const [error,setError] = useState(null);
  const [loading,setLoading] = useState(null)
  const location = useLocation();
const state = location.state;

  const navigate = useNavigate();

  useEffect(() =>{
    setValue("name",state.name)
    setValue("email",state.email)
    setValue("mobile",state.mobile)
    setValue("designation",state.designation)
    setValue("companyname",state.companyname)
  },[])
const modifiedEmp = async (modifiedObj) => {
  console.log(modifiedObj);

  if (!state?._id) {
    console.log("Employee ID missing");
    return;
  }

  try {
    setLoading(true);

    const res = await axios.put(
      `https://emp-mang-app.onrender.com/emp-api/employees/${state._id}`,
      modifiedObj
    );

    // axios gives data directly
    if (res.status === 200) {
      navigate("/list");
    }

  } catch (err) {
    console.log("Error updating employee:", err.response?.data || err.message);
  } finally {
    setLoading(false);
  }
};
if(loading) {
  return <p className="text-center text-4xl">Loading...</p>
}


  return (
    <div>
       <h1 className='text-4xl text-center mb-7'>Edit Employee</h1>

      <form
        className='w-full max-w-md mx-auto mt-7' onSubmit={handleSubmit(modifiedEmp)}
        
      >

        <input
          type="text"
          placeholder='Enter name'
          {...register("name", { required: true })}
          className='mb-3 border-2 p-3 w-full rounded-2xl'
        />

        <input
          type="email"
          placeholder='Enter Email'
          {...register("email", { required: true })}
          className='mb-3 border-2 p-3 w-full rounded-2xl'
        />

        <input
          type="tel"
          placeholder='Enter Mobile No'
          {...register("mobile", { required: true })}
          className='mb-3 border-2 p-3 w-full rounded-2xl'
        />

        <input
          type="text"
          placeholder='Enter Company Name'
          {...register("companyname", { required: true })}
          className='mb-3 border-2 p-3 w-full rounded-2xl'
        />
        <input
  type="text"
  placeholder="Enter Designation"
  {...register("designation", { required: true })}
  className="mb-3 border-2 p-3 w-full rounded-2xl"
/>
<button className='text-amber-50 bg-green-600 rounded-xl p-3 px-3 py-2.5 block mx-auto'>Save</button>
</form>
    </div>
  )
}

export default EditEmployee 