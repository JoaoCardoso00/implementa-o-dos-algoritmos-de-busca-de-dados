const {tableSearch} = require("../algorithms/tableSearch/tableSearch.js");
const {generateArray} = require("../lib/generateArray.js");

describe("Table Search", () => {

    it('Should be able to find target with given array', () => {

        const len = Math.floor(Math.random() * (1000 - 1 + 1) + 1);
        const trg = Math.floor(Math.random() * (len - 1 + 1) + 1);
        const [targetRes, nc] = tableSearch(generateArray(len), trg);
    
        console.log(`Index of target: ${targetRes}, number of comparisons: ${nc}`);

        expect(targetRes).toBe(true);
    
    });


    it('Should return false if the target is not found', () => {

        const [targetRes, nc] = tableSearch(generateArray(1000), 1001);
    
        console.log(`Index of target: ${targetRes}, number of comparisons: ${nc}`);

        expect(targetRes).toBe(false);
    
    })

})