const assertEqual = require('../assertEqual');
const tail = require('../tail');


//TEST CODE
const result = tail(['hello', 'goodbye','auf wiedersehen']);
assertEqual(result.length, 2);
assertEqual(result[0], 'goodbye');
assertEqual(result[1], 'auf wiedersehen');