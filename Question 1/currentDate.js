let currentDate = new Date();
let mm =(currentDate.getMonth() + 1);
let dd = currentDate.getDate();
let yyyy = currentDate.getFullYear();

console.log(`${mm}-${dd}-${yyyy}`);
console.log(`${mm}/${dd}/${yyyy}`);
console.log(`${dd}-${mm}-${yyyy}`);
console.log(`${dd}/${mm}/${yyyy}`);

