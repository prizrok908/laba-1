function hasTwoCubeSums(n) {
    const cubeSums = {};
    const limit = Math.cbrt(n) + 1;

    for (let a = 1; a < limit; a++) {
        for (let b = a; b < limit; b++) {
            const sum = a * a * a + b * b * b;
            if (sum > n) break;
            if (sum === n) {
                if (!cubeSums[sum]) cubeSums[sum] = [];
                cubeSums[sum].push([a, b]);
            }
        }
    }

    if (cubeSums[n] && cubeSums[n].length >= 2) {
        const pairs = cubeSums[n];
        for (let i = 0; i < pairs.length; i++) {
            for (let j = i + 1; j < pairs.length; j++) {
                const pair1 = pairs[i];
                const pair2 = pairs[j];
                const numbers = new Set([...pair1, ...pair2]);
                if (numbers.size === 4) return true;
            }
        }
    }
    return false;
}

const { assert } = require('chai');
describe("Тесты", () => {
    it("тест", () => {
        assert.strictEqual(hasTwoCubeSums(1729), true);
        assert.strictEqual(hasTwoCubeSums(42), false);
    });
});