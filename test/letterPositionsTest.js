const assert = require('chai').assert;
const letterPositions = require('../letterPositions');


describe('#letterPositions', () => {
  it('returns [4, 5, 6] for \(\'aaa bbbcccd\'\).b', () => {
    assert.deepEqual(letterPositions('aaa bbbcccd').b, [4, 5, 6]);
  });
});