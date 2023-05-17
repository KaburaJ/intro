console.log("");
console.log("Question 1");
let input = prompt("Question 1\n\nWant to know if your word is a palindrome?\n\n Enter your word:");

function palindromeCheck(input){
    inputLower=input.toLowerCase();
    reverse = inputLower.split('').reverse().join('');
    if (inputLower === reverse){
        console.log(`${input} is a palindrome`);
    }
    else{
        console.log(`${input} is not a palindrome`);
    }
}

palindromeCheck(input);
