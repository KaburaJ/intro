
console.log("");
console.log("QUESTION 2");

function getLastElements(array, n) {
    if (n === undefined || n >= array.length) {
      return array[array.length - 1];
    } else {
      return array.slice(array.length - n);
    }
  }

numArray=[1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(`last element: ${getLastElements(numArray, 3)}`);

console.log("****************************************");
console.log("****************************************");