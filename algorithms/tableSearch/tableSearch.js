/**
 * @param {Number[]} array : Array of number to find the target value
 * @param {Number} target : Target to be found in given array
 * @returns : An array with an object with the response and the number of comparisons
 */

function tableSearch(array, target) {
    let tablefrequency = [];
    let numbercomparisons = 1;
    let result = {
        index: -1,
        error: ""
    };
    for (let i = 0; i < array.length; i++) {
        tablefrequency.push(array[i]);
    }
    if (tablefrequency[target] > 0) {
        numbercomparisons++;
        result.index = array.indexOf(target);

        return [result, numbercomparisons];
    } else {
        numbercomparisons++;
        result.index = -1;
        result.error = "Not found in array"
        return [result, numbercomparisons];
    }
}
module.exports = { tableSearch }