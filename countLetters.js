const assertEqual = function(actual1, expected) {
  if (actual1 === expected) {
    console.log(`🐢🐢🐢Assertion Passed: ${actual1} === ${expected}`);
  } else {
    console.log(`🦑🦑🦑Assertion Failed: ${actual1} !== ${expected}`);
  }
};


const countLetters = function(string1) {
  const letterCountBuffer = {};
  for (const letter of string1) {
    if (!letterCountBuffer[letter] > 0) {
      letterCountBuffer[letter] = 1;
    } else {
      letterCountBuffer[letter] += 1;
    }
  }
  return letterCountBuffer;
}

console.log(countLetters('aaabbc'))