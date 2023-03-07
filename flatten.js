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

const flatten = function(array) {
  flattenedArrayBuffer = [];
  for (i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      flattenedArrayBuffer.push(array[i]);
    }
    if (Array.isArray(array[i])) {
      for (let item of array[i]) {
        flattenedArrayBuffer.push(item);
      }
    }
  }
  return flattenedArrayBuffer;
}

//testing

console.log(flatten([1, 2, [3, 4], 5, [6]]))// => [1, 2, 3, 4, 5, 6]
console.log(flatten([]))// => []
console.log(flatten([1, 2, [3, 4, 'elephant'], 5, [6]]))// => [1, 2, 3, 4, 'elephant', 5, 6]