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
    assert.equal(challengeCalculator("20"), (20, "20 = 20"));
  });
  it('accepts two values as an input', () => {
    assert.equal(challengeCalculator("1, 5000"), (1, "1+0 = 1"));
  });
  // deprecated 
  it.skip('accepts negative values as an input', () => {
    assert.equal(challengeCalculator("4, -3"), 1);
  });
  it('accepts NaN as an input', () => {
    assert.equal(challengeCalculator("5, tytyt"), (5, "5+0 = 5"));
  });
});

describe('Step Two', () => {
  it('accepts more than two number as an input', () => {
    assert.equal(challengeCalculator([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]), (78, "1+2+3+4+5+6+7+8+9+10+11+12 = 78"));
  });
});

describe('Step Three', () => {
  it('accepts newline character as a delimiter', () => {
    assert.equal(challengeCalculator('1\n2,3'), (6, "1+2+3 = 6"));
  });
});

describe('Step Four', () => {
  it('denys negative numbers and throws an exception with all the negative numbers provided', () => {
    assert.throws(() => {
      challengeCalculator("1, 2, -3"), new Error(`Negative numbers were included in the input and they are not allowed. Negative numbers provided: -3`)
    })
  });
});

describe('Step Five', () => {
  it('denys numbers over 1000 and skips them', () => {
    assert.equal(challengeCalculator([2, 1001, 6]), (8, "2+0+6 = 8"));
  });
});

describe('Step Six', () => {
  it('supports 1 custom delimiter of a single character', () => {
    assert.equal(challengeCalculator("//#\n2#5"), (7, "2+5 = 7"));
    assert.equal(challengeCalculator("//,\n2,ff,100"), (102, "2+0+100 = 102"));
  });
});

describe('Step Seven', () => {
  it('supports 1 custom delimiter of any length', () => {
    assert.equal(challengeCalculator("//[***]\n11***22***33"), (66, "11+22+33 = 66"));
  });
});

describe('Step Eight', () => {
  it('supports 1 custom delimiter of any length', () => {
    assert.equal(challengeCalculator("//[*][!!][r9r]\n11r9r22*hh*33!!44"), (110, "11+22+0+33+44 = 110"));
  });
});

describe('Stretch One', () => {
  it('prints the formula with the numbers given', () => {
    assert.equal(PrintFormula([2, 0, 4, 0, 0, 6], 12), "2+0+4+0+0+6 = 12");
  });
  it('prints the formula with the numbers given from the stringCalc funtion', () => {
    assert.equal(challengeCalculator("2,,4,rrrr,1001,6"), (12, "2+0+4+0+0+6 = 12"));
    assert.equal(challengeCalculator("//[*][!!][r9r]\n11r9r22*hh*33!!44"), (110, "11+22+0+33+44 = 110"));
    assert.equal(challengeCalculator("//#\n2#5"), (7, "2+5 = 7"));
    assert.equal(challengeCalculator("//#\n,2#5"), (7, "0+2+5 = 7"));
  });
});

describe('Stretch Three', () => {
  it('allows an alternate delimiter in step #3', () => {
    assert.equal(challengeCalculator("1*2, 3", "*"), (6, "1+2+3 = 6"));
  });
  it('toggle whether to deny negative numbers in step #4', () => {
    assert.equal(challengeCalculator("1, 2, -3", "", true), (0, "1+2+-3 = 0"));
  });
  it('Sets an upper bound in step #5', () => {
    assert.equal(challengeCalculator("1, 2, 2000", "", "", 2001), (2003, "1+2+2000 = 2003"));
    assert.equal(challengeCalculator("1, 2, 2001"), (3, "1+2+0 = 3"));
  });
});