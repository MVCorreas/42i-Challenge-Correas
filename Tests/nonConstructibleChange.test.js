const { nonConstructibleChange } = require('../src/nonConstructibleChange');
const assert = require('assert');

describe('nonConstructibleChange function', () => {
  it('should be a function', () => {
    assert.strictEqual(typeof nonConstructibleChange, 'function');
  });

  it('should return the correct result for various inputs', () => {
    assert.strictEqual(nonConstructibleChange([1, 2, 5]), 4);
    assert.strictEqual(nonConstructibleChange([1, 2, 3]), 7);
    assert.strictEqual(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]), 20);
  });

  it('should throw an error if the input is not an array', () => {
    assert.throws(() => nonConstructibleChange("string"), TypeError);
    assert.throws(() => nonConstructibleChange(123), TypeError);
    assert.throws(() => nonConstructibleChange(null), TypeError);
    assert.throws(() => nonConstructibleChange(undefined), TypeError);
    assert.throws(() => nonConstructibleChange({}), TypeError);
  });

  it('should throw an error if the array contains non-integer values', () => {
    assert.throws(() => nonConstructibleChange([1.5, 2, 5]), TypeError);
    assert.throws(() => nonConstructibleChange([1, "2", 3]), TypeError);
    assert.throws(() => nonConstructibleChange([5, 7, true, 1, 2, 3, 22]), TypeError);
  });

  it('should throw an error if the array contains negative integers', () => {
    assert.throws(() => nonConstructibleChange([-1, 2, 5]), RangeError);
    assert.throws(() => nonConstructibleChange([1, -2, 3]), RangeError);
    assert.throws(() => nonConstructibleChange([5, 7, -1, 1, 2, 3, 22]), RangeError);
  });
});

