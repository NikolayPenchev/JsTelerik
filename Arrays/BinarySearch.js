/**
 * Created by Penchevi's computer on 01-Jun-15.
 */
//Problem 7. Binary search
//
//Write a script that finds the index of given element in a sorted array of integers by using the binary search algorithm.
var arr = [2,5,6,-1,34,23,12,4,7,0,44];
var x = 8;//enter number which you want to search in the array
var middle = Math.floor(arr.length/2);
var isFound = false;

function sortArr(a,b){
    return a-b;
}

arr.sort(sortArr);
console.log(arr);

if(x===arr[middle]){
    console.log('We found x which index is '+middle+' from the arr');
}
if(x>arr[middle]){
    for(var i = middle; i<arr.length;i++){
        if(x === arr[i]){
            console.log('We found x which is equal to '+ i+' index from the arr');
            isFound=true;
        }
    }
}
if(x<arr[middle]){
    for(var i = middle; i>=0;i--){
        if(x === arr[i]){
            console.log('We found x which is equal to '+ i+' index from the arr');
            isFound=true;
        }
    }
}
else if(isFound==false){
    console.log('There is no such number like x = ' + x);
}
