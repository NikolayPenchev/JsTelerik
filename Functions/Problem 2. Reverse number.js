//Problem 2. Reverse number
//
//Write a function that reverses the digits of given decimal number.

//function reverseNumber(num){
//    var reverse = 0;
//    while(num!==0){
//        reverse *=10;
//        reverse = reverse + (num%10);
//        num = Math.floor(num/10);
//    }
//    console.log(reverse);
//}
function reverseNumber(num){
    var reverse = num.toString().split('').reverse().join('');
    reverse = parseFloat(reverse,10);
    console.log(reverse);
}
reverseNumber(256);
reverseNumber(123.45);
