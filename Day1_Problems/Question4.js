//Find the smallest element in marks array
let marks = [90,78,65,98]
let min = marks[0];
for(let i=0;i<marks.length;i++) {
    if(min > marks[i])
        min = marks[i]; 
}
console.log("Smallest element in marks array:",min);