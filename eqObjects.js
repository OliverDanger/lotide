const assertEqual = function(actual1, expected) {
  if (actual1 === expected) {
    console.log(`🐢🐢🐢Assertion Passed: ${actual1} === ${expected}`);
  } else {
    console.log(`🦑🦑🦑Assertion Failed: ${actual1} !== ${expected}`);
  }
};

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
      // console.log(key, scoreCounter)
    }
    // console.log(eqArrays(object1[key], object2[key]))
    if (Array.isArray(object1[key])) {
      if (eqArrays(object1[key], object2[key])) {
        scoreCounter++;
        // console.log(key, scoreCounter)
      }
    }
  }
  // console.log(scoreCounter)
  // console.log(keys1.length)
  if (scoreCounter == keys1.length) {
    return true;
  }
  return false;
};



//testing

const shirtObject = { fit: '10/10', colours: ['green', 'blue'], size: 'large'};
const anotherShirtObject = { size: 'large', colours: ['green', 'blue'], fit: '10/10'};
assertEqual(shirtObject, anotherShirtObject);
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);