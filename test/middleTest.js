const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

//testing
assertArraysEqual([], middle([1, 2])); // => []
assertArraysEqual([], middle([1])); // => []
assertArraysEqual([2], middle([1, 2, 3])); // => [2]
assertArraysEqual([3, 4], middle([1, 2, 3, 4, 5, 6]));