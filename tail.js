const assertEqual = function(actual1, expected) {
  if (actual1 === expected) {
    console.log(`🐢🐢🐢Assertion Passed: ${actual1} === ${expected}`);
  } else {
    console.log(`🦑🦑🦑Assertion Failed: ${actual1} !== ${expected}`);
  }
};

const tail = function(array2) {
  return array2.slice(1, array2.length);
};
//TEST CODE
const result = tail(['hello', 'goodbye','auf wiedersehen']);
assertEqual(result.length, 2);
assertEqual(result[0], 'goodbye');
assertEqual(result[1], 'auf wiedersehen');
