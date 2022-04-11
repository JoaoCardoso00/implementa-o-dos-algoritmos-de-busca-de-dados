const binarySearch = require("../algorithms/binarySearch/binarySearch.js");
const genArr = require("../lib/genArr.js");

describe("Binary Search", () => {

    it('Should be able to find target with given array', () => {

        const len = Math.floor(Math.random() * (1000 - 1 + 1) + 1);
        const target = Math.floor(Math.random() * (len - 1 + 1) + 1);
        const [targetRes, numOfComparisons] = binarySearch(genArr(len), target);
    
        console.log(`Index of target: ${targetRes}, number of comparisons: ${numOfComparisons}`);

        expect(targetRes).toBe(target);
    
    });


    it('Should return -1 if the target is not found', () => {

        const [targetRes, numOfComparisons] = binarySearch(genArr(1000), 1001);
    
        console.log(`Index of target: ${targetRes}, number of comparisons: ${numOfComparisons}`);

        expect(targetRes).toBe(-1);
    
    })

})

