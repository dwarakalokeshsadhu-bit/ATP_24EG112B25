// import { useState } from "react";
// function Counter() {
//      const [count,setCount] =  useState(0)
//     //state
  
//     //funcitrons to modify the state
//     const increment = () =>{
//        setCount(count + 1);
    
//     };

// const decrement = () => {
//     setCount(count - 1);
// };
// console.log("counter component")
// return(
//     <div className="text-center p-10 border"> 
//     <h1 className="text-6xl">Count</h1>
//     </div>
//     //Hooks
// //UseState
// //useEffect
// //useContext
// //useRef
// //useMemo
// )
// }
// export default Counter;
import { useState } from "react"; //useState hook in reactJS and it is a function

function Counter() {
    //state
    const [count, setCount] = useState(0) //[state, function to change  the state ]
    //Event handler functions to modify the state
    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };
    const reset = (value) => {
        setCount(value)
    }

    console.log("counter component")

    return (
        <div className="text-center p-10 border">
            <h1 className="text-4xl mb-6">Count</h1>

            {/* Display Count */}
            <p className="text-4xl font-bold mb-6">{count}</p>

            {/* Buttons */}
            {/* //Event Handler functions */}
            <div className="flex justify-center gap-6">
                <button 
                    onClick={decrement}
                    className="bg-red-500 text-white px-6 py-2 rounded-lg text-l hover:bg-red-700">
                    - Decrement
                </button>
                <button 
                    onClick={increment}
                    className="bg-green-500 text-white px-6 py-2 rounded-lg text-l hover:bg-green-700">
                    + Increment
                </button>
                <button 
                    onClick={()=>reset(0)}
                    className="bg-amber-400 text-white px-6 py-2 rounded-lg text-l hover:bg-amber-300">
                    reset
                </button>
            </div>
        </div>
    );
}

export default Counter;