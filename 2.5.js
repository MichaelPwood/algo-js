const readlineSync = require("readline-sync");

let response = 0;
while (response != 42) {
    response = readlineSync.question("What your favorite number? " );
    if (response != 42) {
        console.log("Are you sure?");
    } else {
        console.log("Yes we did it!");
    }
}