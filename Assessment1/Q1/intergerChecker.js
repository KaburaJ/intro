let input1 = Number(prompt("Enter the first number:"));
let input2 = Number(prompt("Enter the second number:"));

let difference = Math.abs(input1 - input2);
if((input1 + input2)=== 8){
    console.log(`The sum of ${input1} and ${input2} is 8!`);

}
else if(difference=== 8){
    console.log(`The diference of ${input1} and ${input2} is 8!`);
}
else if(input1=== 8){
    console.log(`One of the numbers you have entered is 8!`);
}
else if(input2=== 8){
    console.log(`One of the numbers you have entered is 8!`);
}
else{
    console.log("No 8 here!")
}