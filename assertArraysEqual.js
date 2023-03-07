

const eqArrays = function (array1, array2) {
  let perfectScore = array1.length;
  let countScore = 0;
  if (array1.length !== array2.length) return false;
  for (const item1 of array1) {
    for (const item2 of array2) {
      if (item1 === item2) {
        countScore++;
      }
    }
  }
  if (countScore === perfectScore) {
    return true;
  }
  return false;
}

//TESTCODE
