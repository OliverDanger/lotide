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

const without = function(sourceArray, itemsToRemove){
  let outputArrayBuffer = [];
  for (let item of sourceArray) {
    let toRemove = false;
    for (i = itemsToRemove.length - 1; i >= 0; i--) {
      if (item === itemsToRemove[i]) {
        toRemove = true;
      }
    }
    if (!toRemove) {
      outputArrayBuffer.push(item);
    }
  }
  return outputArrayBuffer;
}

//TEST CODE

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]
console.log(without(["1", "2", "3"], [])) // => ["1", "2", "3"]

const words = ['hello', 'world', 'lighthouse'];
without(words, ['lighthouse'])
assertArraysEqual(words, ['hello', 'world', 'lighthouse']);