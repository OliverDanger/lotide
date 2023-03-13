const eqArrays = require('./eqArrays');

const middle = function(array1) {
  const array1Length = array1.length;
  const trueMiddle = array1Length / 2;
  let middleBuffer = [];
  if (array1Length < 3) {
    return middleBuffer;
  }
  if (trueMiddle % 1 === 0) {
    middleBuffer.push(array1[trueMiddle - 1]);
    middleBuffer.push(array1[trueMiddle]);
    return middleBuffer;
  }
  return [array1[trueMiddle - 0.5]];
};


console.log(middle([1, 2, 3]));
console.log(middle([]));

module.exports = middle;