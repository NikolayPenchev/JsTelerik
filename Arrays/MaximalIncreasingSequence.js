/**
 * Created by Penchevi's computer on 01-Jun-15.
 */
//Problem 4. Maximal increasing sequence
//
//Write a script that finds the maximal increasing sequence in an array.

var arr = [3, 2, 3, 4, 2, 2, 4, 5, 6, 7, 1, 2, 3, 4, 5];
var startNumber;
var maxSequence = 1;
var currentSequence = 1;

for (var i = 0; i < arr.length; i++) {
    if (arr[i] + 1 === arr[i + 1]) {
        currentSequence++;
        if (maxSequence < currentSequence) {
            maxSequence = currentSequence;
            startNumber = arr[i] + 1;
        }
    } else if (arr[i] + 1 !== arr[i + 1]) {
        currentSequence = 1;
    }
}
for (var i = 0; i < maxSequence; i++) {
    console.log(startNumber);
    startNumber--;
}
