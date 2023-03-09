const assertEqual = function(actual1, expected) {
  if (actual1 === expected) {
    console.log(`🐢🐢🐢Assertion Passed: ${actual1} === ${expected}`);
  } else {
    console.log(`🦑🦑🦑Assertion Failed: ${actual1} !== ${expected}`);
  }
};

const findKey = (object1, callback) => {
  object1Keys = Object.keys(object1)
  // console.log(object1Keys)
  for (const key in object1) {
    // console.log(object1[key]);
    if (callback(key)) {
      return key;
    }
  }
  return false;
}


//testing

const testObject = {
  abc: 123,
  def: 456,
  ghi: 789
}

const result1 = findKey(testObject, x => x == 'tomato');
console.log(result1)
