console.log("");
console.log("Question 1");

let input = prompt("Question 2\n\nEnter string to be reversed:");

function reverse(input){
    input = input.toLowerCase();
    reversed = input.split('').reverse().join('');
    if(reversed){
        console.log(`${input} reversed is: ${reversed}`);
    }
    else{
        console.log("No string entered!");
    }
}

reverse(input);