//Problem 7. First larger than neighbours
//
//Write a function that returns the index of the first element in array that is larger than its neighbours or -1, if there’s no such element.
//    Use the function from the previous exercise.

function largerThanNeighbours(arr) {
    arr = arr || [];
    var isLarger = false;
    for (var i = 1; i < arr.length - 1; i++) {
        if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
            console.log('First larger than neighbours is the number with index ' + i + ' from the array.');
            isLarger = true;
            break;
        }
    }
    if (isLarger === false) {
        console.log('There is no such number in the array');
    }

}

largerThanNeighbours([2, 4, 5, 7, 8, 9, 7, 5, 4, 3, 22, 3]);
largerThanNeighbours([7, 6, 8, 3, 0, 7, 5, 6, 4, 43, 4, 6, 7, 3]);
largerThanNeighbours([2, 6, 7, 8, 8, 7, 7, 2, 1, 3, 4, 5]);
