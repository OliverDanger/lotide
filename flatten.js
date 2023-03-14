const assertArraysEqual = require('./assertArraysEqual')

const flatten = function(array) {
  flattenedArrayBuffer = [];
  for (i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      flattenedArrayBuffer.push(array[i]);
    }
    if (Array.isArray(array[i])) {
      for (let item of array[i]) {
        flattenedArrayBuffer.push(item);
      }
    }
  }
  return flattenedArrayBuffer;
}

module.exports = flatten;