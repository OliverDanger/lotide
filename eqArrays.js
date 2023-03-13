const assertEqual = require('./assertEqual');

const eqArrays = function (array1, array2) {
  let perfectScore = array1.length;
  let countScore = 0;
  if (array1.length !== array2.length) return false;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      countScore++;
    }
  }
  if (countScore === perfectScore) {
    return true;
  }
  return false;
}

module.exports = eqArrays;