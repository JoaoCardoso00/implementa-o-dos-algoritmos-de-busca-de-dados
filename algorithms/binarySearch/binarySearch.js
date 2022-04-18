/**
 * @param {number[]} arr sorted array of numbers
 * @param {number} target target to find within the given array 
 * @returns {} [target, numOfComparisons] - An array containing the number of comparisons and the given target, returns -1 for the target if not found
 */
 const binarySearch = (arr, target) => {
    let numOfComparisons = 0;
    let start = 0;
    let end = arr.length - 1;

    while(start <= end) {

        middle = Math.floor((start + end) / 2);
        numOfComparisons++;

        if(arr[middle] === target) {
            return [target, numOfComparisons];
        }

        if (arr[middle] > target) {
            end = middle - 1;
            continue;
        }

        if(arr[middle] < target) {
            start = middle + 1;
            continue;
        }

    }

    return [-1, numOfComparisons];

}

module.exports = binarySearch;