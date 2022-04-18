/**
 * @param {Number} size : A size for the generatated array;
 * @returns {Number[]} : Returns an array of numbers from 1 to the size variable;
 */

function generateArray(size) {
    let array = [];

    for (let i = 1; i < size; i++) {
        array.push(i);    
    }

    return array;
}

module.exports = { generateArray };