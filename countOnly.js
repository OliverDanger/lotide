const eqArrays = function (array1, array2) {
  let perfectScore = array1.length;
  let countScore = 0;
  if (array1.length !== array2.length) return false;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      countScore++;
    }
  }
  if (countScore === perfectScore) {
    return true;
  }
  return false;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays( array1, array2)) {
    console.log(`🐢🐢🐢Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🦑🦑🦑Assertion Failed: ${array1} !== ${array2}`);
  }
};

//____________________________________

const letterCount = function (toCount, string) {
  let countBuffer = 0;
  for (let letter of string) {
    if (letter == toCount) {
      countBuffer++;
    }
  }
  return countBuffer;
}

const countOnly = function(array1,object1) {
  const countedLettersBuffer = {};
  //for each key, if true count value
  for (let letter in object1) {
    if (object1[letter]) {
      if (letterCount(letter, array1) >0) {
        console.log(letter)
        countedLettersBuffer[letter] = letterCount(letter, array1);
      }
      //output to buffer
    }
  }
  //return buffer
  return countedLettersBuffer;
}



//testing

console.log(eqArrays([1,2,3],[1,2,3]));
assertArraysEqual([1,2,3],[1,2,3]);

const testArray = ['a', 'a', 'b', 'c', 'd', 'e', 'a'];
const testObject = { a: true, d: true, b: false, f: true };
console.log(countOnly(testArray,testObject));
console.log(letterCount('a','abcabcabcaaa'));