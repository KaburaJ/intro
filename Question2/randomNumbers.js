correctGuess = 3;


input = Number(prompt("Guess a number between 1 and 10"));

if((input>1) && (input<10)){
    if(input === correctGuess){7

        console.log("Good Work")
    }
    else{
        console.log("Not Matched")
    }
}