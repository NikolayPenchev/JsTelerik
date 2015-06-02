/**
 * Created by Penchevi's computer on 01-Jun-15.
 */
//Selection sort
//
//Sorting an array means to arrange its elements in increasing order.
//    Write a script to sort an array.
//    Use the selection sort algorithm: Find the smallest element, move it at the first position, find the smallest from the rest, move it at the second position, etc.
//    Hint: Use a second array

var arr1 =[5,11,9,3,1,22];
var swap;

for (var i =0; i<arr1.length;i++){
    for(var j = i +1;j<arr1.length;j++){
        if(arr1[i]>arr1[j]){
            swap = arr1[i];
            arr1[i]=arr1[j];
            arr1[j] = swap;
        }
    }
}
console.log(arr1.join(', '));
