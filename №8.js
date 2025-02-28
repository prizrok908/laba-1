function expandedForm(num) {
    const digits = String(num).split('');
    let result = [];

    for (let i = 0; i < digits.length; i++) {
        const value = digits[i] * Math.pow(10, digits.length - i - 1);
        if (value > 0) {
            result.push(value.toString());
        }
    }

    return result.join(' + ');
}

const { assert } = require('chai');
describe("Tests", () => {
    it("test", () => {
        assert.strictEqual(expandedForm(12), '10 + 2');
        assert.strictEqual(expandedForm(42), '40 + 2');
        assert.strictEqual(expandedForm(70304), '70000 + 300 + 4');
    });
});