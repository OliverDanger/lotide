const assert = require('chai').assert;
const eqObjects = require('../eqObjects');



describe('#eqObjects', () => {
  it('returns true for two same objects', () => {
    const shirtObject = { fit: '10/10', colours: ['green', 'blue'], size: 'large'};
    const anotherShirtObject = { size: 'large', colours: ['green', 'blue'], fit: '10/10'};
    assert.deepEqual(eqObjects(shirtObject, anotherShirtObject), true);
  })
  it('returns false for two different objects', () => {
    const shirtObject = { fit: '10/10', colours: ['green', 'blue'], size: 'large'};
    const anotherShirtObject = { size: 'medium', colours: ['green', 'blue'], fit: '10/10'};
    assert.deepEqual(eqObjects(shirtObject, anotherShirtObject), false);
  })
})