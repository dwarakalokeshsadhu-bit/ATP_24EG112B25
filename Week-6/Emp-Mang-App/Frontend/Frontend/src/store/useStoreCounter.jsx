import {create } from "zustand"
 
//create store
export const useStoreCounter = create((set)=>({
    //state
    newCounter:0,
    newCounter1:100,
    //add user state(name,age,email)
    user:{name:"lokesh",email:"lokesh@email.com",age:18},
    //functions to modify the state
    increamentCounter:()=>set(state=>({newCounter:state.newCounter+1})),
    decremetnCounter:()=>set(state=>({newCounter:state.newCounter-1})),
    reset:()=>set({newCounter:0}), //We don't need the state to reset to zero

    increamentCounter1:()=>set(state=>({newCounter1:state.newCounter1+1})),
    //Function to change newCounterto 500
    changeCounter1:()=>set({newCounter1:500}),
    //Function to decrement newCounter by 20
    decrementCounter1:()=>set(state=>({newCounter1:state.newCounter1-20})),
    //Function to change email
    changeEmail:()=>set({...user,email:"dwaraka@gmail.com"}),
    //Function to change name and age
   changeNameAndAge:()=>set({...user,name:"Dwaraka",age:19})
}))
//By using the set function we can change the state and it returns an object
