const countOnly = require('../countOnly').countOnly;
const assert = require('chai').assert;


// //testing

// console.log(eqArrays([1, 2, 3], [1, 2, 3]));
// assertArraysEqual([1, 2, 3], [1, 2, 3]);

// console.log(countOnly(testArray, testObject));
// console.log(letterCount('a', 'abcabcabcaaa'));

describe('#countOnly', () => {
  it('returns a: 3 d: 1 for [a,a,a,d,b] and {a: true, d: true, b: false}', () => {
    const testArray = ['a', 'a', 'b', 'c', 'd', 'e', 'a'];
    const testObject = { a: true, d: true, b: false };
    assert.deepEqual(countOnly(testArray, testObject), { a: 3, d: 1 });
  });
});