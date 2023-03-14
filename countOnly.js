const assertArraysEqual = require('./assertArraysEqual')

//____________________________________

const letterCount = function (toCount, string) {
  let countBuffer = 0;
  for (let letter of string) {
    if (letter == toCount) {
      countBuffer++;
    }
  }
  return countBuffer;
}

const countOnly = function(array1,object1) {
  const countedLettersBuffer = {};
  //for each key, if true count value
  for (let letter in object1) {
    if (object1[letter]) {
      if (letterCount(letter, array1) >0) {
        countedLettersBuffer[letter] = letterCount(letter, array1);
      }
      //output to buffer
    }
  }
  //return buffer
  return countedLettersBuffer;
}


module.exports = {
  letterCount,
  countOnly
}