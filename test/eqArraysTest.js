const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

//TEST CODE


describe('#eqArrays', () => {
  it('returns true for [1, 2, 3], [1, 2, 3]', () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it('returns false for [1, 2, 3], []', () => {
    assert.strictEqual(eqArrays([1, 2, 3], []), false);
  });
  it('returns true for [2, 2, 2], [2, 2, 2]', () => {
    assert.strictEqual(eqArrays([2, 2, 2], [2, 2, 2]), true);
  });
});
