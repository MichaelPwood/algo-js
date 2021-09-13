
const readlineSync = require("readline-sync");

function calcSurface(length, width) {
    return length * width;
}

let length = readlineSync.question("Enter the length");
let width = readlineSync.question("Enter the width");
console.log(calcSurface(length, width));