/*
* -> var was used before ES6
* -> const is used to define constant
* -> let is used to declare block scoped variables
* -> var has global scope while let has block scope 
* -> var can be redeclared while let can't
*/

var a = "Aditya";
let v = "Vaish";
{
    var a = 23;
    let v = 25;
    console.log(a);
    console.log(v);
}
console.log(a); // The global state was changed
console.log(v);


/*
* -> var is intialized with undefined
* -> const and let are not intialized
*/

const author = "Aditya";
console.log(author);