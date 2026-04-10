
import { counterContextObj } from "./contexts/ContextProvider.jsx"
import { useContext } from 'react'
import { useStoreCounter } from './store/useStoreCounter.jsx'
import Test from "../src/Test.jsx"


function Home() {
  //call useCounterStore hook to get state of zustand store
  // let {newCounter, incrementCounter, } = useStoreCounter()
  // const {counter, changeCounter} = useContext(counterContextObj)
  let newCounter = useStoreCounter((state)=> state.newCounter);
  let incrementCounter = useStoreCounter((state)=>state.incrementCounter)

  // const result = useContext(counterContextObj)
  // console.log(result)
  const {counter, changeCounter } = useContext(counterContextObj);
  console.log("Home");
  return (
    <div>
      <h1>Counter: {counter}</h1>
<button onClick={changeCounter} className='p-2 bg-amber-300'>Change</button>
<Test/>
    </div>
  )
}

export default Home