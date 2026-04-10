import React from 'react'
import { NavLink } from 'react-router'

function Header() {
  return (
    <nav className='flex justify-end text-2xl p-7 bg-gray-600 gap-5'>
     <h2 className="text-amber-50 mr-auto">Employee Managment system</h2>
      <NavLink to="" className={({isActive})=> (isActive ? "text-grey-200" : " text-amber-50")}>Home</NavLink>
       <NavLink to="create-emp" className={({isActive})=> (isActive ? "text-grey-200" : "text-amber-50")}>CreateEmployee</NavLink>
        <NavLink to="list" className={({isActive})=> (isActive ? "text-grey-200" : "text-amber-50")}>Employees</NavLink>
       
    </nav>
  )
}

export default Header