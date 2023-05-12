let input = Number(prompt("Enter your value in minutes:"));

let hours = Math.floor(input/60);
let minutes = Math.round(((input/60) - hours)*60);


console.log(`The value is ${hours} hours ${minutes} minutes.`);

