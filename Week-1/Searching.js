/*Write s function that receives an array & serach element as args andreturn the index of that searchelememt
in the array.it should return not found when search element is not found */
let i=0
function searchElement(arr,search) {
    for( i=0;i<arr.length;i++) {
        if(arr[i] == search) {
        return i;
        }
 }   
 }
 let arr = [1,2,3,4,5]
 let search = 6;
 let index = searchElement(arr,search);
if(i < arr.length)
 console.log("index of search element is:",index);
else
    console.log("Not found");
