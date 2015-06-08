//Problem 4. Number of elements
//
//Write a function to count the number of div elements on the web page

function countDivs(){
    var count;
    var div = 'div';
    var markUp = document.documentElement.innerHTML;
    var newStr = markUp.replace(/\W+/g, ' ');
    var doc = newStr.split(' ');

    for (var i = 0; i < doc.length; i++) {
        if (doc[i] === div) {
            count++;
        }
    }

}

console.log(countDivs());//нз къде бъркам :(
