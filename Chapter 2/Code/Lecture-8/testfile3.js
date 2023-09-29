let a = prompt("Enter a number : ");
a = Number.parseInt(a);
if(a%5==0 && a%6==0)
    console.log("Divisible by both");
else if(a%5==0)
    console.log("Divisible by 5");
else if(a%6==0)
    console.log("Divisible by 6");
else
    console.log("Neither");