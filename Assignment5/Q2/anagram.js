function areAnagrams(str1, str2) {
    const input1 = str1.toLowerCase();
    const input2 = str2.toLowerCase();
  
    // Create character frequency maps for both strings
    const charMap1 = getCharacterFrequency(input1);
    const charMap2 = getCharacterFrequency(input2);
  
    // Check if the character frequency maps are equal
    for (let char in charMap1) {
      if (charMap1[char] !== charMap2[char]) {
        return false;
      }
    return true;
    }
  }
  
  function getCharacterFrequency(str) {
    const charMap = {};
  
    for (let char of str) {
      charMap[char] = charMap[char] + 1 || 1;
    }
  
    return charMap;
  }
  
  console.log("");
  console.log("Question 2");
  
  let input1 = prompt("Want to know if two of your words are anagrams?\n\n Enter your first word:");
  let input2 = prompt("Enter your second word:");
  
  if (areAnagrams(input1, input2)) {
    console.log(`"${input1}" and "${input2}" are anagrams!`);
  } else {
    console.log(`"${input1}" and "${input2}" are not anagrams.`);
  }
  