//Write a function that recevies an array as argment and return their sum
function findSum(arr) {
    let sum = 0;
    for(let i=0;i<arr.length;i++) {
        sum += arr[i];
    }
    return sum;
}
let marks = [90,80,70,85]
let totalmarks = findSum(marks);
console.log("Total marks is:",totalmarks);  