// 1.Insert new Emp at 2nd position
// 1.Remove an emp with name "Kiran"
// 3.Change the last mark 95 to 75 of emp  "Sneha"
const employees = [
  {
    eno: 101,
    name: "Ravi",
    marks: [78, 82, 91],
  },
  {
    eno: 102,
    name: "Bhanu",
    marks: [65, 70, 68],
  },
  {
    eno: 103,
    name: "Sneha",
    marks: [88, 92, 95],
  },
  {
    eno: 104,
    name: "Kiran",
    marks: [55, 60, 58],
  },
  {
    eno: 105,
    name: "Anitha",
    marks: [90, 85, 87],
  },
];
 employees.splice(2,0,{eno:106,name:"Lokesh",marks:[90,87,89]})
 for(let v of employees)
 console.log("Employee id:",v.eno,"Employee Name:",v.name,"Employee marks:",v.marks)
 employees[3].marks[2] = 75
employees.splice(3,1)
for(let v of employees)
console.log("Employee id:",v.eno,"Employee Name:",v.name,"Employee marks:",v.marks)