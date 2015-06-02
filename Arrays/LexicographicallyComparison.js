/**
 * Created by Penchevi's computer on 01-Jun-15.
 */
//Problem 2. Lexicographically comparison
//
//Write a script that compares two char arrays lexicographically (letter by letter).
var arr1 = 'aslsdhjasdfffff';
var arr2 = 'sdkfhhffasdfffsss';
var biggerArr = Math.max(arr1.length,arr2.length);
console.log(biggerArr);
for(var i = 0;i<biggerArr;i++){
    if(arr1[i]>arr2[i]){
        console.log('arr1['+i+'] > arr2['+i+']');
    }if(arr1[i]<arr2[i]){
        console.log('arr1['+i+'] < arr2['+i+']');
    }if(arr1[i]===arr2[i]){
        console.log('arr1['+i+'] = arr2['+i+']');
    }
}









