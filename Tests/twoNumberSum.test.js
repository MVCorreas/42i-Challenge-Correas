const { twoNumberSum } = require('../src/Functions/twoNumberSum');
const assert = require('assert');

describe('twoNumberSum function', () => {
  it('should be a function', () => {
    assert.strictEqual(typeof twoNumberSum, 'function');
  });

  it('should return the correct result for various inputs', () => {
    assert.deepStrictEqual(twoNumberSum([2, 7, 11, 15], 9), [2, 7]);
    assert.deepStrictEqual(twoNumberSum([3, 6, 8, 10], 15), []);
  });

  it('should throw an error if the input is not an array', () => {
    assert.throws(() => twoNumberSum("string"), TypeError);
    assert.throws(() => twoNumberSum(123), TypeError);
    assert.throws(() => twoNumberSum(null), TypeError);
    assert.throws(() => twoNumberSum(undefined), TypeError);
    assert.throws(() => twoNumberSum({}), TypeError);
  });

  it('should not return repeated numbers', () => {
    const result = twoNumberSum([2, 2, 4, 8], 6);
    assert.deepStrictEqual(result, [2, 4]);
  });

  // it('should not accept negative numbers', () => { //Where did I take this from?!
  //   assert.deepStrictEqual(twoNumberSum([-2, 4, 8, 10], 6), []);
  // });

  it('should throw an error if the array contains non-integer values', () => {//!Added this it
    assert.throws(() => twoNumberSum([1.5, 2, 5]), TypeError);
    assert.throws(() => twoNumberSum([1, "2", 3]), TypeError);
    assert.throws(() => twoNumberSum([5, 7, true, 1, 2, 3, 22]), TypeError);
  });
});
