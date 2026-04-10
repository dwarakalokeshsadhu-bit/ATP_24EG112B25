import React from 'react'
import { useLocation } from 'react-router'
function Employee() {

  //read state received in navigation
  const { state } = useLocation()
  

  return (
    <div className='p-5  text-left text-2xl gap-2 '>
      <p><strong>Name:</strong>{state.name}</p>
      <p><strong>Email:</strong>{state.email}</p>
      <p><strong>Contact:</strong>{state.mobile}</p>
      <p><strong>Designation:</strong>{state.designation}</p>
      <p><strong>Companyname:</strong>{state.companyname}</p>
      
    </div>
  )
}

export default Employee