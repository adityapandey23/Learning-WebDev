const student = {
    Maths:89,
    Phy:95,
    Chem:85,
    Eng:82
}

for(let i = 0;i<Object.keys(student).length;i++){
    console.log("The marks of " + Object.keys(student)[i] + " is " + student[Object.keys(student)[i]]);
}

// Object.keys() and Object.values() will return of what they mean
// length is used to calculate the length of the array 