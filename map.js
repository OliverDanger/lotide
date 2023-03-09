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
//_____________________________

const map = (array, callbackFunc) => {
  const resultsBuffer = [];
  for (const item of array) {
    // console.log('item BEFORE: ', item);
    // console.log('item AFTER: ', callbackFunc(item));
    // console.log('---');
    resultsBuffer.push(callbackFunc(item));
  }
  return resultsBuffer;
};


//testing 
const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
console.log(results1);

const results2 = map(words, word => word.toUpperCase());
console.log(results2);

const results3 = map(words, word => `${word} ${word} ${word}`);
console.log(results3);

const results4