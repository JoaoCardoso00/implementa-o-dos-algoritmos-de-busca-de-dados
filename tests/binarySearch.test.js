const binarySearch = require("../algorithms/binarySearch/binarySearch.js");
const {generateArray} = require("../lib/generateArray.js");

const ARRAY_LENGHT = 1000;

describe("Binary Search", () => {
  it("Should be able to find target with given array", () => {
    const len = Math.floor(Math.random() * (ARRAY_LENGHT - 1 + 1) + 1);
    const target = Math.floor(Math.random() * (len - 1 + 1) + 1);
    const [targetRes, numOfComparisons] = binarySearch(generateArray(len), target);

    console.log(
      `Binary Search to find ${target}:\nIndex of target: ${targetRes}, number of comparisons: ${numOfComparisons}`
    );

    expect(targetRes).toBe(target);
  });
  it("Should return -1 if the target is not found", () => {
    const [targetRes, numOfComparisons] = binarySearch(generateArray(ARRAY_LENGHT), 1001);

    console.log(
      `Binary Search to find 1001:\nIndex of target: ${targetRes}, number of comparisons: ${numOfComparisons}`
    );

    expect(targetRes).toBe(-1);
  });
});
