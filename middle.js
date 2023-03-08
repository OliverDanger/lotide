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

const middle = function(array1) {
  const array1Length = array1.length;
  const trueMiddle = array1Length / 2;
  let middleBuffer = [];
  if (array1Length < 3) {
    return middleBuffer;
  }
  if (trueMiddle % 1 === 0) {
    middleBuffer.push(array1[trueMiddle - 1])
    middleBuffer.push(array1[trueMiddle])
    return middleBuffer;
  }
  return [array1[Math.floor(middleBuffer)]];
}

//testing
console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1,2,3,4,5,6]))