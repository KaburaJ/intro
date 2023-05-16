console.log("");
console.log("QUESTION 5");

function filter_array_values(arr) {
    const filteredArray = arr.filter((value) => {
      // Filter out false, null, 0, and blank values
      return value !== false && value !== null && value !== 0 && value !== '';
    });
  
    return filteredArray;
  }
  
// Test case
const filteredResult = filter_array_values([58, '', 'abcd', true, null, false, 0]);
console.log(filteredResult);
  
console.log("****************************************");
console.log("****************************************");