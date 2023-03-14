const assert = require('chai').assert;
const tail = require('../tail');




describe('#tail', () => {
  it('returns [\'goodbye\',\'auf wiedersehen\'] for [\'hello\', \'goodbye\',\'auf wiedersehen\']', () => {
    assert.deepEqual(tail(['hello', 'goodbye', 'auf wiedersehen']), ['goodbye', 'auf wiedersehen']);
  });
});