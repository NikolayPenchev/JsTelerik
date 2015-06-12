function solve(params) {
    var s = params[0].split(' ').map(Number);
    var stones = 0;
    var sumMax = 0;

    for (var i = 1, len = s.length; i <= len; i++) {
        if(s[i-1]>s[i]||s[i-1]<s[i]){
            stones+=1;
        }if (stones > sumMax) {
            sumMax = stones;
        }if(s[i-1]<s[i]&&s[i]>s[i+1]){
            stones = 0;
        }
    }
    return sumMax;
}

console.log(solve(['5 1 7 4 8']));
console.log(solve(['5 1 7 6 3 6 4 2 3 8']));
console.log(solve(['10 1 2 3 4 5 4 3 2 1 10']));
