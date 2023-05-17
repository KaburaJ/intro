let isBlank = (input) => {
    if(input.trim()){
        console.log("Not blank");
    }
    else{
        
        console.log("String blank");
    }

}

console.log("");
let input = prompt("Question 3\n\nEnter your string:");
isBlank(input);