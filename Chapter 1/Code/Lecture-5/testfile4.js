const obj = {
    name : "Aditya",
    age : 20,
    isPrincipal : false
}

console.log(obj.name);
console.log(obj.age);
console.log(obj.isPrincipal);

// obj = 2; // This will throw an error as the object is const

// But this is possible
obj.gender = "Male"; // Adding a key to the dictionary
console.log(obj);