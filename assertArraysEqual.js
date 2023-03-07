

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
}

const assertArraysEqual = function(array1, array2) {
  if (eqArrays( array1, array2)) {
    console.log(`🐢🐢🐢Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🦑🦑🦑Assertion Failed: ${array1} !== ${array2}`);
  }
}

// const assertEqual = function(actual1, expected) {
//   if (actual1 === expected) {
//     console.log(`🐢🐢🐢Assertion Passed: ${actual1} === ${expected}`);
//   } else {
//     console.log(`🦑🦑🦑Assertion Failed: ${actual1} !== ${expected}`);
//   }
// };

//TESTCODE

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([2, 3, 4], [1, 2, 3]);
assertArraysEqual([], []);