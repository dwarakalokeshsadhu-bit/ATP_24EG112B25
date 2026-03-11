//Write a function that receives 3 numbers args and return the largest of the three numbers
function findLargest(a,b,c) {

    if(a>b && a>c)
     return a;
    else if(b>a && b>c)
     return b;  
    else
     return c;  
    }
    let Largest = findLargest(10,20,30);
    console.log("Largest number is:",Largest);