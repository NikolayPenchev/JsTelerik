//Problem 5. Appearance count
//
//Write a function that counts how many times given number appears in given array.
//    Write a test function to check if the function is working correctly.
function appearanceCount(num, arr) {
    num = num || 0;
    arr = arr || [];
    var current = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            current++;
            isAppear = true;
        }
    }
    console.log(num + ' appear '+ current + ' times in the array');

}

appearanceCount(3,[1,3,4,5,6,3,4,2,3]);
appearanceCount(2,[22,3,4,56,7,12]);
