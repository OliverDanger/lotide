const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  let scoreCounter = 0;
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const key of keys1) {
    if (object1[key] === object2[key]) {
      scoreCounter++;
    }
    if (Array.isArray(object1[key])) {
      if (eqArrays(object1[key], object2[key])) {
        scoreCounter++;
      }
    }
  }
  if (scoreCounter == keys1.length) {
    return true;
  }
  return false;
};

module.exports = eqObjects;