/*
-> There are 7 primitive data types
    - Null
    - Number
    - Symbol
    - String
    - Boolean
    - Bigint
    - Undefined
*/

let a = null;
let b = 23;
let c = Symbol("This is a Symbol");
let d = "Aditya";
let e = true;
let f = BigInt("345") + BigInt(5); // We can add two Bigint like this
let g = undefined;

console.log(a, b, c, d, e, f, g);
console.log(typeof a,"\n"); // This will give the type of variable "a" 


/*
-> Objects (Non Primitive Data types)
-> Basicially, Dictionary in Python i.e. key-value pairs
*/

const food = {
    "Sweet":"Jalebi",
    a:23,
    "Sour":"lemon",
    "Price":200  
}

console.log(food["Sweet"]);
console.log(food.a); // If simple variable then we have to use it like this
console.log(food["adi"],"\n"); // If not defined has been called then undefined

const student = {
    name : "Aditya",
    age : 20,
    cgpa : 8.88
}

console.log(student.name);
console.log(student.age);
console.log(student.cgpa);




/**
 * More About accessing Objects
 * 1- Dot Notation
 * 2- Bracket Notation
 * 3- Square Brackets with String
*/

let person = {
    firstName: "Aditya",
    lastName: "Pandey",
    age:20
}

// Dot Notation
//  -> object.property_name
console.log(person.firstName);

// Bracket Notation (When property name is stored in a variable)
//  -> object[variable_name]
let temp = "lastName";
console.log(person[temp]);

// Square Brackets with string
//  -> object["Property_name"]
console.log(person["age"]);