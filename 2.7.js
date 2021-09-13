const readlineSync = require("readline-sync");

let n = new Number(readlineSync.question("Enter a number"));
let res;
let num;
for (i = 0; i <= n; i++) {
    num = new Number(readlineSync.question("Enter a number"));
    res = res + num;
}
console.log(res);