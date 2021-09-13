const readlineSync = require("readline-sync");

function multiRand(n) {
    let array = [];
    for (let i = 0; i < n; i++) {
        array[i] = Math.floor(Math.random() * (10 - 0)) + 0;
    }
    return array;
}
let n = readlineSync.question("Enter a number : ");
console.log(multiRand(n));