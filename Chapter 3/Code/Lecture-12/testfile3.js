let n = 45;
let flag = false;
while(!flag){
    let temp = prompt("Enter a number: ");
    if(temp == n){
        flag = true;
        console.log("Congratulations");
    }
    else{
        console.log("Try Again");
    }
}