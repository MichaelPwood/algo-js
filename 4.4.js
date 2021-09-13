const readlineSync = require("readline-sync");

function multiRand(n) {
    let array = [];
    for (let i = 0; i < n; i++) {
        array[i] = Math.floor(Math.random() * (10 - 0)) + 0;
    }
    return array;
}
function average(arr) {
    let average = arr.reduce( ( a, b ) => a + b, 0 ) / arr.length;
    return average;
}
function min(arr) {
    return Math.min(...arr);
}
function max(arr) {
    return Math.max(...arr);
}

let n = readlineSync.question("Enter a number : ");

let array = multiRand(n);
console.log("Your array is : " + array);
console.log("the average is : " + average(array));
console.log("the minimum is : " + min(array));
console.log("the maximum is : " + max(array));