function wave(str) {
    const result = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') continue;
        let waveString = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);
        result.push(waveString);
    }
    return result;
}

const chai=require('chai')
const {assert} = chai;
chai.config.truncateThreshold = 0;

describe('Testing...', function(){
  it("Basic tests", () => {
      let result = ["Hello", "hEllo", "heLlo", "helLo", "hellO"];
      assert.deepEqual(wave("hello"), result, "Should return: '"+result+"'");

      result = ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"];
      assert.deepEqual(wave("codewars"), result, "Should return: '"+result+"'");

      result = [];
      assert.deepEqual(wave(""), result, "Should return: '"+result+"'");

      result = ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"];
      assert.deepEqual(wave("two words"), result, "Should return: '"+result+"'");

      result = [" Gap ", " gAp ", " gaP "];
      assert.deepEqual(wave(" gap "), result, "Should return: '"+result+"'");
  });
});