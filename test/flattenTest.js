const flatten = require('../flatten.js')
const assert = require('chai').assert;
//testing

// console.log(flatten([1, 2, [3, 4], 5, [6]]))// => [1, 2, 3, 4, 5, 6]
// console.log(flatten([]))// => []
// console.log(flatten([1, 2, [3, 4, 'elephant'], 5, [6]]))// => [1, 2, 3, 4, 'elephant', 5, 6]
describe('#flatten', () => {
  it('returns [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]', () => {
  assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6])
})
})