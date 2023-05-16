console.log("");
console.log("QUESTION 4");

function difference(arr1, arr2) {
    const diff = [];
  
    arr1.forEach((item) => {
      if (!arr2.includes(item)) {
        diff.push(item.toString());
      }
    });
  
    arr2.forEach((item) => {
      if (!arr1.includes(item)) {
        diff.push(item.toString());
      }
    });
  
    return diff;
  }
  
  // Test case
  const result = difference([1, 2, 3], [100, 2, 1, 10]);
  console.log(result);
  console.log("****************************************");
console.log("****************************************");