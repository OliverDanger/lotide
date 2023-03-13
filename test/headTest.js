const {head} = require('../head');
const assertEqual = require('../assertEqual');



//TEST CODE
// console.log(
  assertEqual(head([5,6,7]), 5);
  assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  assertEqual(head(["Lighthouse", "Labs"]), 'Lighthouse');
  assertEqual(head([]), undefined);
// )