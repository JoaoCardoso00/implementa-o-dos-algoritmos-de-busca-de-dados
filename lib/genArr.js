/**
 * @param {number} len length of the array you want to generate
 * @returns Array containing the Ascending order of numbers from 1 to the array length
 */
 function genArr(len) {
    let arr = [];
    for (let i = 0; i < len; i++) {
        arr[i] = i + 1;
    }
    return arr;
}

module.exports = genArr