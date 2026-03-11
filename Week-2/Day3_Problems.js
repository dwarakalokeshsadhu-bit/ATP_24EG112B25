// Assignment 1: Daily Temperature Analyzer
// ----------------------------------------
// Scenario : You are analyzing daily temperatures recorded by a weather app.

// Test data:
// const temperatures = [32, 35, 28, 40, 38, 30, 42];

// Tasks:
//     1. filter() temperatures above 35
//     2. map() to convert all temperatures from Celsius → Fahrenheit
//     3. reduce() to calculate average temperature
//     4. find() first temperature above 40
//     5. findIndex() of temperature 28
const temperatures = [32, 35, 28, 40, 38, 30, 42];
let filteredTemp = temperatures.filter(function (element)  {
    return element>35
})
console.log(filteredTemp)
let fahreTemp = temperatures.map(element=>element*9/5 + 32)
console.log(fahreTemp)
let result = temperatures.reduce((acc,element)=> {
return acc+element
})
let avgTemp = result/temperatures.length
console.log(avgTemp)
let tempAb = temperatures.find(element=>element>40)
console.log(tempAb)
let tempIndex = temperatures.findIndex(element=>element===28)
console.log(tempIndex)
// Assignment 2: Online Course Name Processor
// ------------------------------------------
// Scenario : You are preparing a course list for display on a website.

// Test data:
const courses = ["javascript", "react", "node", "mongodb", "express"];


// Tasks:
//     1. filter() courses with name length > 5
let lengthGreater = courses.filter(element=>element.length>5)
console.log(lengthGreater)
//     2. map() to convert course names to uppercase
let namesUppCase = courses.map(element=>element.toUpperCase())
console.log(namesUppCase)
//     3. reduce() to generate a single string:
//               "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"
let singleString = courses.reduce((acc,element,index)=>{
     return acc + (index===0 ? "":' | ') + element.toUpperCase()
 },"")
 console.log(singleString)


//     4. find() the course "react"
let courseReact = courses.find(element=>element==='react')
console.log(courseReact)
//     5. findIndex() of "node"
let nodeIndex = courses.findIndex(element=>element==='node')
console.log(nodeIndex)

// Assignment 3: Student Marks List
// --------------------------------
// Scenario : You receive marks from an exam system.

// Test data:
const marks = [78, 92, 35, 88, 40, 67];

// Tasks:
//     1. filter() marks ≥ 40 (pass marks)
let passmarks = marks.filter(element=>element >=40)
console.log(passmarks)
//     2. map() to add 5 grace marks to each student
let addGraceMarks = marks.map(element=>element+5)
console.log(addGraceMarks)
//     3. reduce() to find highest mark
let highestMark = marks.reduce((acc,element)=>{
    if(acc > element)
        return acc
    else
        return element
},0)
console.log(highestMark)
//     4. find() first mark below 40
let markBelow = marks.find(element=>element<40)
console.log(markBelow)
//     5. findIndex() of mark 92
let indexmark = marks.findIndex(element=>element===92)
console.log(indexmark)