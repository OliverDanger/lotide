const assertEqual = function(actual1, expected) {
  if (actual1 === expected) {
    console.log(`🐢🐢🐢Assertion Passed: ${actual1} === ${expected}`);
  } else {
    console.log(`🦑🦑🦑Assertion Failed: ${actual1} !== ${expected}`);
  }
};

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

//testing

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);