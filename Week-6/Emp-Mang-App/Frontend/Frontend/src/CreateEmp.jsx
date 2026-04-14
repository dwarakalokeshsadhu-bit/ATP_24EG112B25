import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import {useNavigate} from 'react-router'
import { counterContextObj } from "./contexts/ContextProvider"
import { useContext } from 'react'

function CreateEmp() {
  
const {counter,changeCounter } = useContext(counterContextObj)
  const [loading, setLoading] = useState(false)
  const [error,setError] = useState(null)
  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors } } = useForm()

  // Form Submit
  const onFormSubmit = async (newEmpObj) => {
    console.log(newEmpObj)

    try {
      setLoading(true)

      let resObj = await fetch(`${import.meta.env.VITE_API_URL}/emp-api/employees`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newEmpObj),
      })

      if (resObj.status === 201) {
        //navigate to employees component 
        navigate("/list")
      } else {
        let errorRes = await res.json()
        throw new Error(errorRes)
      }

    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <p className='text-center text-4xl'>Loading...</p>
  }

  return (
    <div>
      <h1 className='text-5xl text-center mb-7'>Create New Employee</h1>
       <div>
      <h1>Counter: {counter}</h1>
<button onClick={changeCounter} className='p-2 bg-amber-300'>Change</button>
    </div>

      <form
        className='w-full max-w-md mx-auto mt-7'
        onSubmit={handleSubmit(onFormSubmit)}
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

        <button
          type="submit"
          className='border p-3 rounded-2xl bg-gray-900 text-amber-50 ml-44'
        >
          AddEmp
        </button>

      </form>
    </div>
  )
}

export default CreateEmp