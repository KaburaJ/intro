

let input1 = Number(prompt("Enter the first number"));
let input2 = Number(prompt("Enter the second number"));

let defaultValue = 100;

let diff1= Math.abs(defaultValue-input1)
let diff2 = Math.abs(defaultValue-input2)

if((diff1) < (diff2)){

     console.log(`${input1} is closest to 100`);
}
else if((diff2) < (diff1)){

    console.log(`${input2} is closest to 100`);
}