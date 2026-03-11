// Exercise 1: Copy & Extend an Array

//                         Goal: Learn array copying with spread
                        
                        // You are given:
                                let fruits = ["apple", "banana"];
                        
                        
                        // Tasks
                        //       -> Create a new array moreFruits
                              let moreFruits = []
            
                        //       -> Copy all fruits from fruits
                             moreFruits=[...fruits,"orange"]
                        //       -> Add "orange" at the end using spread
                               
                              
                        //       -> Print both arrays
                        console.log(fruits)
                        console.log(moreFruits)
                        
                        // Exercise 2: Update User Object
                        
                        // Goal: Learn object cloning & adding new property
                        
                        // You are given:
                                
                                let user = {
                                  name: "Ravi",
                                  city: "Hyderabad"
                                };
                        
                        
                        
                        // Tasks
                        
                        //       -> Create a new object updatedUser
                              let updatedUser={}
                        //       -> Copy all properties from user
                              updatedUser = {...user,age:25}
                        //       -> Add a new property age: 25
                              
                        //       -> Print both objects
                        console.log(updatedUser)
                        console.log(user)
                        
//        Hands-On 1: Shallow Copy (Controlled Mutation Use Case)
// -------------------------------------------------------
// 🧪 Given Data:
              const user1 = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };

// 🎯 Task
//     1. Create a shallow copy of user
let copyUser = {...user1}
//     2. Change:
//           i. name in the copied object
       copyUser.name= "Lokesh" 
//           ii. preferences.theme in the copied object
        copyUser.preferences.theme="Light"
//           iii .Log both original and copied objects
                    console.log(user1)
                    console.log(copyUser)
//           iv. Observe what changes and what doesn’t
// Hands-On 2: Deep Copy (Isolation & Safety Use Case)
// ---------------------------------------------------

// 🧪 Given Data:
                const order = {
                  orderId: "ORD1001",
                  customer: {
                    name: "Anita",
                    address: {
                      city: "Hyderabad",
                      pincode: 500085
                    }
                  },
                  items: [
                    { product: "Laptop", price: 70000 }
                  ]
                };

// 🎯 Task:
//       1. Create a deep copy of order
      let orderCopy = structuredClone(order)
//       2. Modify in copied object:
//             i. customer.address.city
                 orderCopy.customer.address.city="Chennai"
//             ii. items[0].price
                   orderCopy.items[0].price=80000
//             iii. Verify original object remains unchanged
console.log(order)
console.log(orderCopy)



                 
                        
                       






