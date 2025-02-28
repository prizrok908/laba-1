function findMissing(arr) {
    const step = (arr[arr.length - 1] - arr[0]) / arr.length;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] !== step) {
            return arr[i - 1] + step;
        }
    }
    return null;
}

const { assert } = require('chai');
describe('Example tests', function() {
  it('Testing with [1, 3, 4]', function() {
    assert.strictEqual(findMissing([1, 3, 4]), 2);
  });
});