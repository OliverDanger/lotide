const assertEqual = function(actual1, expected) {
  if (actual1 === expected) {
    console.log(`🐢🐢🐢Assertion Passed: ${actual1} === ${expected}`);
  } else {
    console.log(`🦑🦑🦑Assertion Failed: ${actual1} !== ${expected}`);
  }
};

//TEST CODE
assertEqual('Lighthouse Labs', 'Bootcamp');
assertEqual(1,1);
assertEqual('hi','hi');
assertEqual(1,2);