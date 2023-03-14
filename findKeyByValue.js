const assertEqual = require('./assertEqual');

const findKeyByValue = function(object1, value1) {
  object1Keys = Object.keys(object1)
  // console.log(object1Keys)
  for (const key in object1) {
    // console.log(object1[key]);
    if (object1[key] == value1) {
      return key;
    }
  }
};

module.exports = findKeyByValue;