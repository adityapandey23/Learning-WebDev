// For Loop 
let n,sum = 0;
n = prompt("Enter a number: ");
n = Number.parseInt(n);

for (let i=1;i<=n;i++){
    sum+=i;
}

console.log("Sum = ",sum);
console.log("\n");


// For in Loop -> For objects and arrays
let obj = {
    Adi:8.8,
    AlsoAdi:9.18,
    AlsoAlsoAdi:8.59
};
for(let a in obj){ // Here a contains the property name
    console.log(a,"\t",obj[a]);
}
console.log("\n");


// For of loop -> String, maps, sets and arrays
for(let c of "Aditya")
    console.log(c);


/**
 * for...in is used for iterating over the properties of an object
 * for...of is used for iterating over the values of iterable objects.
 */