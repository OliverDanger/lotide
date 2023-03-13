const assert = require('chai').assert;
const middle = require('../middle');
// const assertArraysEqual = require('../assertArraysEqual');

//testing
// assertArraysEqual([], middle([1, 2])); // => []
// assertArraysEqual([], middle([1])); // => []
// assertArraysEqual([2], middle([1, 2, 3])); // => [2]
// assertArraysEqual([3, 4], middle([1, 2, 3, 4, 5, 6]));

describe('#middle', () => {
  it('returns [] for [1, 2]', () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it('returns [] for [1]', () => {
    assert.deepEqual(middle([1]), []);
  });
  it('returns [2] for [1, 2, 3]', () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it('returns [3, 4] for [1, 2, 3, 4, 5, 6]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});