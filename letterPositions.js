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
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays( array1, array2)) {
    console.log(`🐢🐢🐢Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🦑🦑🦑Assertion Failed: ${array1} !== ${array2}`);
  }
};

const letterPositions = function(sentence) {
  const results = {};
  const noSpaces = sentence.split(' ').join();
  //find letter
  //is letter in results alredy?
  //if not, count letter places
  //add places to letter counter array
  //add letter counter array to results

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

const testString = 'aaa bbbcccd'
console.log(letterPositions(testString).b)
// assertArraysEqual(letterPositions(testString).o , [2, 3]); 