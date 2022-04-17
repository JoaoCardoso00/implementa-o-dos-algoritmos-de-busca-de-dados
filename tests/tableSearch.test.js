const { tableSearch } = require("../algorithms/tableSearch/tableSearch.js");
const { generateArray } = require("../lib/generateArray.js");

describe("Table Search", () => {
    it('Should be able to find target with given array', () => {

        const size = Math.floor(Math.random() * (1000 - 1 + 1) + 1);
        const target = Math.floor(Math.random() * (size - 1 + 1) + 1);
        const array = generateArray(size);
        const [result, comparisons] = tableSearch(array, target);

        console.log(`TableSearch target ${target}:\n Index of target: ${result.index}, number of comparisons: ${comparisons}`);

        expect(result.index).toBe(array.indexOf(target));

    });
    it('Should return false if the target is not found', () => {
        const [result, comparisons] = tableSearch(generateArray(1000), 1001);

        console.log(`TableSearch target 1001:\n Index of target: ${result.index}, number of comparisons: ${comparisons}`);

        expect(result.index).toBe(-1);

    })
})