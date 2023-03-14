const assertArraysEqual = require('./assertArraysEqual')

const letterPositions = function(sentence) {
  const results = {};
  const noSpaces = sentence.split(' ').join();

  for (let i = 0; i < noSpaces.length; i++) {
    let positions = [];
    if (!results.hasOwnProperty(i)) {
      for (let j = 0; j < noSpaces.length; j++) {
        if (noSpaces[i] == noSpaces[j]) {
          positions.push(j)
        }
      }
      results[noSpaces[i]] = positions;
    }
    
  }

  return results;
};

module.exports = letterPositions;
