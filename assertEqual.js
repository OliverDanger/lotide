const assertEqual = function(actual1, expected) {
  if (actual1 === expected) {
    console.log(`🐢🐢🐢Assertion Passed: ${actual1} === ${expected}`);
    return true;
  } else {
    console.log(`🦑🦑🦑Assertion Failed: ${actual1} !== ${expected}`);
    return false;
  }
};

module.exports = assertEqual;
