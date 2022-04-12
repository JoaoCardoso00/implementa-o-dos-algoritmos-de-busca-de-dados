const { expect, describe } = require("@jest/globals");
const {
  LinearSearch,
} = require("../algorithms/linearSearch/LinearSearch.js");
const { generateArray } = require("../lib/generateArray.js");

const ARRAY_LENGHT = 1000;

describe("Linear Search", () => {
  it("Should be able to return the index of the element if element was found in given array", () => {
    const array = generateArray(ARRAY_LENGHT);
    const target = Math.floor(Math.random() * (ARRAY_LENGHT - 1) - 1);

    const [result, comparisons] = LinearSearch.search(array, target);

    console.log(
      `Linear Search to find ${target}:\nIndex of target: ${result.index}, number of comparisons: ${comparisons}`
    );

    expect(result).toStrictEqual({ index: array.indexOf(target), found: true });
  });
  it("Should be able to return index -1 if element was not found in given array", () => {
    const array = generateArray(ARRAY_LENGHT);
    const target = 1001;

    const [result, comparisons] = LinearSearch.search(array, target);

    console.log(
      `Linear Search to find ${target}:\nIndex of target: ${result.index}, number of comparisons: ${comparisons}`
    );

    expect(result).toStrictEqual({ index: -1, found: false });
  });
});

