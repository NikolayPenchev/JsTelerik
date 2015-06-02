/**
 * Created by Penchevi's computer on 01-Jun-15.
 */
//Problem 6. Most frequent number
//
//Write a script that finds the most frequent number in an array.
var current = 1;
var max = 1;
var number;
var arr = [4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3];

for (var i = 0; i < arr.length; i++) {
    current =1;
    for (var j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            current++;
            if (current > max) {
                max = current;
                number = arr[i];
            }
        }
    }
}

console.log(number+' ('+max+' times)');
