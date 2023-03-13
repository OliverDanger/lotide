const assert = require('chai').assert;
const tail = require('../tail');


//TEST CODE
// const result = tail(['hello', 'goodbye','auf wiedersehen']);
// assertEqual(result.length, 2);
// assertEqual(result[0], 'goodbye');
// assertEqual(result[1], 'auf wiedersehen');

describe('#tail', () => {
  it('returns [\'goodbye\',\'auf wiedersehen\'] for [\'hello\', \'goodbye\',\'auf wiedersehen\']', () => {
    assert.deepEqual(tail(['hello', 'goodbye', 'auf wiedersehen']), ['goodbye', 'auf wiedersehen']);
  });
});