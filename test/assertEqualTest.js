const assert = require('chai').assert;
const assertEqual = require('../assertEqual');


//TEST CODE
// assertEqual('Lighthouse Labs', 'Lighthouse Labs');
// assertEqual(1,1);
// assertEqual('hi','hello');
// assertEqual(1,2);

describe('#assertEqual', () => {
  it('returns true for \'Lighthouse Labs\', \'Lighthouse Labs\'', () => {
    assert.strictEqual(assertEqual('Lighthouse Labs', 'Lighthouse Labs'), true);
  });
  it('returns false for \'Lighthouse Labs\', \'Bighthouse Babs\'', () => {
    assert.strictEqual(assertEqual('Lighthouse Labs', 'Bighthouse Babs'), false);
  });
  it('returns false for 1, 2', () => {
    assert.strictEqual(assertEqual(1, 2), false);
  });
  it('returns true for 3, 3', () => {
    assert.strictEqual(assertEqual(3, 3), true);
  });

});