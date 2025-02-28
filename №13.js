function longest(arr, n) {
    const sorted = arr
        .map((str, index) => ({ str, index }))
        .sort((a, b) => {
            if (b.str.length !== a.str.length) {
                return b.str.length - a.str.length;
            }
            return a.index - b.index;
        });

    return sorted[n - 1].str;
}

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(longest(['Hello','World','Codewars','Katas'],3),'World');
Test.assertEquals(longest(['Hello','World','Codewars','Katas'],4),'Katas');
Test.assertEquals(longest(['aa', 'bb', 'cc', 'dd', 'eee', 'b', 'f', 'ff', 'hhh', 'gggg'],4),'aa');
Test.assertEquals(longest(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'k'],1),'a');
Test.assertEquals(longest(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'k','l'],1),'a');
  });
});
