// Functions
// Method-1
function onePlusAvg(x,y){
    return Math.round(1 + (x+y)/2); // Round off function
}
// Method-2 (*Preferred*)
const Avg =(x,y)=>{
    return (x+y)/2;
}

let a = 1, b = 2, c= 3;

console.log("Average of a and b = ",Avg(a,b));
console.log("Average of b and c = ",Avg(b,c));
console.log("Average of a and c = ",Avg(a,c));

console.log("One plus average of a and b = ",onePlusAvg(a,b));
console.log("One plus average of b and c = ",onePlusAvg(b,c));
console.log("One plus average of a and c = ",onePlusAvg(a,c));

const hello =()=>{
    console.log("Helloo");
}

hello();