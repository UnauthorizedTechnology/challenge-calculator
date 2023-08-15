var assert = require('assert');
require('./challengeCalculator.js');

describe('Step One', () => {

  it('throws an Error when there are more than two values input', () => {
    assert.throws(() => {
      challengeCalculator("1, 2, 3"), new Error('Parameter has more than two values')
    })
  });
  it('accepts one value as an input', () => {
    assert.equal(challengeCalculator("20"), 20);
  });
  it('accepts two values as an input', () => {
    assert.equal(challengeCalculator("1, 5000"), 5001);
  });
  it('accepts negative values as an input', () => {
    assert.equal(challengeCalculator("4, -3"), 1);
  });
  it('accepts NaN as an input', () => {
    assert.equal(challengeCalculator("5, tytyt"), 5);
  });
});