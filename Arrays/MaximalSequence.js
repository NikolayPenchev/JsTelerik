/**
 * Created by Penchevi's computer on 01-Jun-15.
 */
//Problem 3. Maximal sequence
//
//Write a script that finds the maximal sequence of equal elements in an array.
var arr = [2, 1, 1, 2, 3, 3, 2, 2, 2, 1];
var maxSequence = 1;
var currentSequence=1;
var number;
for(var i =0 ; i<arr.length;i++){
    if(arr[i]===arr[i+1]){
        currentSequence++;
        if(maxSequence<currentSequence){
        maxSequence=currentSequence;
        number = arr[i];
        }
    }else if(arr[i]!==arr[i+1]){
        currentSequence = 1;
    }
}

for(var i =0;i<maxSequence;i++){
    console.log(number);
}



