const { expect, describe } = require("@jest/globals");
const {
  LinearSearch,
} = require("../algorithms/linearSearch/LinearSearch.js");
const { generateArray } = require("../lib/generateArray.js");

const ARRAY_LENGHT = 1000;

describe("Linear Search", () => {
  it("Should be able to return true if element was found in given array", () => {
    const array = generateArray(ARRAY_LENGHT);
    const target = Math.floor(Math.random() * (ARRAY_LENGHT - 1) - 1);

    const [result, error, comparisons] = LinearSearch.search(array, target);
    expect(result).toStrictEqual({ target: target, found: true });
  });
  it("Should be able to return false if element was not found in given array", () => {
    const array = generateArray(ARRAY_LENGHT);
    const target = 1001;

    const [result, error, comparisons] = LinearSearch.search(array, target);

    expect(result).toStrictEqual({ target: target, found: false });
  });
});
