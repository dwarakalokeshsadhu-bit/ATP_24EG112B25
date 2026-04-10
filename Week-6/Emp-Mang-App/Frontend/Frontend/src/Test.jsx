import { useContext } from "react"
import { counterContextObj } from "./contexts/ContextProvider"

function Test() {
    console.log("Test");
    
    const {counter1,setCounter1} = useContext(counterContextObj)
  return (
    <div>
        Counter1:{counter1}
        <button  className=""onClick={setCounter1}>Increment</button>
    </div>
  )
}

export default Test