
import { useState,useEffect } from "react";
function APIDemo() {
    console.log("API demo rendered")
    let [count, setCount] = useState(0);
    let [users,setUsers] = useState([])
    let [loading, setLoading] = useState(false)
    let [error, setError] = useState(null)
 
    const changeCount = () => {
        setCount(count + 1);
    };

    useEffect(() => {
        
        //A function to make API req
        async function getData() {
            setLoading(true)
           
           try { 
            let res = await fetch('https://jsonplaceholder.typicode.com/posts')
            let userList = await res.json();
            //update state
            setUsers(userList);
           }

        
        catch (err) {
            console.log("err is",err)
            //update error state
            setError(err)
        }
        finally{
            setLoading(false)
        }
        
    }
    getData()
    },[]);
    //deal with loading state
    if(loading === true) {
        return <p className="text-center text-2xl">Loading...</p>
    }
    // Deal with error State
    if(error != null) {
        return <p className="text-center text-orange-600 text-2xl">{error.message}</p>
    }

    console.log("API demo rendered");

    return (
        
            <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    {users.map((userObj) => (
        <div 
            key={userObj.id} 
            className="p-4 border rounded-xl shadow-md break-all"
        >
            <p className="text-sm font-medium">
                {userObj.title}
            </p>
        </div>
    ))}
     {/* <button className="text-center p-1 border bg-blue-400 rounded-lg border-r-cyan-700" onClick={changeCount}>
                Increase
            </button> */}
</div>
    );
}
export default APIDemo
//Making API rquest need to be in waiting until initial rendering
//Intial rendering->Display->API call->re rendering->display