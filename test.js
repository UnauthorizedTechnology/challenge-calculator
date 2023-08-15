var assert = require('assert');
require('./challengeCalculator.js');

describe('Step One', () => {

  // deprecated 
  it.skip('throws an Error when there are more than two values input', () => {
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
  // deprecated 
  it.skip('accepts negative values as an input', () => {
    assert.equal(challengeCalculator("4, -3"), 1);
  });
  it('accepts NaN as an input', () => {
    assert.equal(challengeCalculator("5, tytyt"), 5);
  });
});

describe('Step Two', () => {
  it('accepts more than two number as an input', () => {
    assert.equal(challengeCalculator([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]), 78);
  });
});

describe('Step Three', () => {
  it('accepts newline character as a delimiter', () => {
    assert.equal(challengeCalculator('1\n2,3', true), 6);
  });
});

describe('Step Four', () => {
  it('denys negative numbers and throws an exception with all the negative numbers provided', () => {
    assert.throws(() => {
      challengeCalculator("1, 2, -3"), new Error(`Negative numbers were included in the input and they are not allowed. Negative numbers provided: -3`)
    })
  });
});