import {useState,useEffect} from 'react'
import { useLocation, useNavigate } from 'react-router'
import axios from 'axios';

function ListOfEmps() {
  const [loading, setLoading] = useState(false)
    const [error,setError] = useState(null)
  const [emps,setEmps] = useState([])
  const naviagte = useNavigate();
  
  const gotoEmployee = (empObj) => {
    //navigate to /employee along with selected employee obj
    naviagte("/employee",{state:empObj})
  }
  const gotoEditEmployee = (empObj) => {
    //navigate to /edit-emp along with the selected emp obj
    naviagte("/edit-emp",{state:empObj})
  }
  

  const deleteEmployee = async(id) => {
    let res = await axios.delete(`http://localhost:4000/emp-api/employee/${id}`)
    if(res.status === 200) {
      //get latest emps data
      getEmps()
      
    }
    else {
        let errorRes = await res.json()
        throw new Error(errorRes)
      }
  } 
  //get all emps
   async function getEmps() {
      let res = await fetch('http://localhost:4000/emp-api/employees') 
      if(res.status === 200) {
        let resObj = await res.json()
        setEmps(resObj.payload)
      }
      else {
        let errorRes = await res.json()
        throw new Error(errorRes)
      }
    }
    if(loading) {
      return <p className='text-center text-4xl'>Loading...</p>
    }

    //Get all emps on component loading
  useEffect(()=>{
   
    getEmps()
  },[])
//   return (
//     <div  className='mt-3'>
//       <h1 className='text-4xl '>ListOfEmps</h1>
//   <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-7 '>
//      {
//       emps.map((empObj)=><div key={empObj._id}> <p>{empObj.email}</p><p>{empObj.name}</p></div>)
//      }
// </div>
// </div>
//   )
// }
// return (
//   <div className="mt-3">
//     <h1 className="text-4xl text-center text-amber-50">List Of Employees</h1>

//     <table className="w-full mt-7 border">
//       <thead>
//         <tr className="bg-gray-">
//           <th className="border p-2">Name</th>
//           <th className="border p-2">Email</th>
//           <th className="border p-2">Mobile</th>
//           <th className="border p-2">Company</th>
//         </tr>
//       </thead>

//       <tbody>
//         {emps.map((empObj) => (
//           <tr key={empObj._id}>
//             <td className="border p-2">{empObj.name}</td>
//             <td className="border p-2">{empObj.email}</td>
//             <td className="border p-2">{empObj.mobile}</td>
//             <td className="border p-2">{empObj.companyname}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   </div>
// );
return (
  <div className="mt-3">
    <h1 className="text-4xl text-center">List Of Employees</h1>

    <ul className="mt-7 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {emps.map((empObj, index) => (
        <li
          key={empObj._id}
          className="border p-4 rounded-xl bg-amber-50 flex flex-col justify-between"
        >
          {/* Content */}
          <div className="space-y-1">
            <p><strong>{index + 1}.</strong> {empObj.name}</p>
            <p className="wrap-break-words">{empObj.email}</p>
          </div>

          {/* Buttons (now always at bottom) */}
          <div className="flex justify-around mt-4">
            <button onClick={() => gotoEmployee(empObj)} className="text-white px-3 py-1 rounded-xl bg-green-600">
              View
            </button>
            <button onClick={() => gotoEditEmployee(empObj)}className="text-white px-3 py-1 rounded-xl bg-amber-500">
              Edit
            </button>
            <button onClick={() => deleteEmployee(empObj._id)} className="text-white px-3 py-1 rounded-xl bg-red-600">
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  </div>
);
}

export default ListOfEmps