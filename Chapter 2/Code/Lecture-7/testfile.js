/**
 * -> prompt : This will as you something
 *      - let a = prompt("Hey what's up ?");
 *      - The value it'll take will be string
 * -> alert : This will tell something
 *      - alert("Halo");
 */

// Type Casting
let a = prompt("Enter a number : ");
a = Number.parseInt(a);

if(a>18)
    alert("This is a valid age and you can drive");
else if(a>0)
    alert("This is a valid age, but you cannot drive");
else
    alert("This is not a valid age");


(a>18)?console.log("Noice"):console.log("Not Noice");

/**
 * npm init -y
 * npm install prompt-sync
 * const prompt = require('prompt-sync')(); (in the program)
 */