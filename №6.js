function toWeirdCase(str) {
    return str.split(' ').map(word => {
        return word.split('').map((char, index) => {
            return index % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
        }).join('');
    }).join(' ');
}

describe('Tests', function() {
    const { assert } = require('chai');
    function doTest(input, expected) {
        const actual = toWeirdCase(input);
        const message = `for ${JSON.stringify(input)}\n`;
        assert.strictEqual(actual, expected, message);
    }
    it('Sample Tests', function() {
        doTest('This is a test', 'ThIs Is A TeSt');
        doTest('', '');
        doTest('unique', 'UnIqUe');
        doTest('UPPER CASE', 'UpPeR CaSe');
        doTest('lower case', 'LoWeR CaSe');
    });
});