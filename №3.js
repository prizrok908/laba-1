function whatCentury(year) {
    const century = Math.floor((parseInt(year, 10) - 1) / 100) + 1;
    if (century % 10 === 1 && century !== 11) return century + 'st';
    if (century % 10 === 2 && century !== 12) return century + 'nd';
    if (century % 10 === 3 && century !== 13) return century + 'rd';
    return century + 'th';
}

const chai = require("chai");
const assert = chai.assert;
describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(whatCentury("1999"), "20th", "With input '1999' solution produced wrong output");
    assert.strictEqual(whatCentury("2011"), "21st", "With input '2011' solution produced wrong output");
    assert.strictEqual(whatCentury("2154"), "22nd", "With input '2154' solution produced wrong output");
    assert.strictEqual(whatCentury("2259"), "23rd", "With input '2259' solution produced wrong output");
    assert.strictEqual(whatCentury("1234"), "13th", "With input '1234' solution produced wrong output");
    assert.strictEqual(whatCentury("1023"), "11th", "With input '1023' solution produced wrong output");
    assert.strictEqual(whatCentury("2000"), "20th", "With input '2000' solution produced wrong output");
  });
});