let angle = Number(prompt("Enter the value of your angle"));

if((angle>=0) &&(angle<90)){
    console.log(`An angle of ${angle} is an acute angle.`)

}
else if(angle === 90){
    console.log(`An angle of ${angle} is a right angle.`)

}
else if((angle>90) &&(angle<180)){
    console.log(`An angle of ${angle} is an obtuse angle.`)

}
else if(angle === 180){
    console.log(`An angle of ${angle} is a straight line.`)

}