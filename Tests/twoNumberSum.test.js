const { twoNumberSum } = require('../src/twoNumberSum');
const assert = require('assert');

describe('twoNumberSum function', () => {
  it('should be a function', () => {
    assert.strictEqual(typeof twoNumberSum, 'function');
  });

  it('should return the correct result for various inputs', () => {
    assert.deepStrictEqual(twoNumberSum([2, 7, 11, 15], 9), [2, 7]);
    assert.deepStrictEqual(twoNumberSum([3, 6, 8, 10], 15), []);
  });

  it('should not return repeated numbers', () => {
    assert.deepStrictEqual(twoNumberSum([2, 2, 4, 8]));
  });

  it('should not accept negative numbers', () => {
    assert.deepStrictEqual(twoNumberSum([-2, 4, 8, 10], 6), []);
  });
});
