let marks = [80, 77, 88, 95, 68];

let averageMarks = average(marks);

console.log(`for marks values: ${marks}; \nGrade =`)
if(averageMarks <= 60){
    console.log("F");
}
else if(averageMarks <= 70){
    console.log("D");
}
else if(averageMarks <= 80){
    console.log("C");
}
else if(averageMarks <= 90){
    console.log("B");
}
else if(averageMarks <= 100){
    console.log("A");
}

function average(){
    let num = 0;
    for(let i =0; i< marks.length; i++){
        num += marks.length;
        return num/marks.length;
    }
}