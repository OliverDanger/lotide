const assertArraysEqual = require('../assertArraysEqual')
const assert = require('chai').assert;


//TESTCODE

// assertArraysEqual([1, 2, 3], [1, 2, 3]);
// assertArraysEqual([2, 3, 4], [1, 2, 3]);
// assertArraysEqual([], []);

describe('#assertArraysEqual', () => {
  it('returns true for [1, 2, 3], [1, 2, 3]', () => {
    assert.deepEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]), true);
  })
  it('returns false for [2, 3, 4], [1, 2, 3]', () => {
    assert.deepEqual(assertArraysEqual([2, 3, 4], [1, 2, 3]), false);
  })
  it('returns true for [], []', () => {
    assert.deepEqual(assertArraysEqual([], []), true);
  })
})