
let numberArray = prompt("Enter multiple numbers separated by commas:");
numberArray = numberArray.split(',');

console.log(`Array: [${numberArray[0]},${numberArray.slice(-1)}]`);

