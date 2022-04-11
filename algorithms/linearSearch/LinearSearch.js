class LinearSearch {
  /**
   *
   * @param {Number[]} array : Array of Numbers ;
   * @param {Number} target : Target number to find inside array;
   * @returns : An array of objects, result and error, result is target number and if was found, error is type and message;
   */
  static search(array, target) {
    let result = { index: -1, found: false };
    let comparisons = 0;

    for (let i = 0; i < array.length; i++) {
      if (array[i] === target) {
        result.index = i;
        result.found = true;
        break;
      }
      comparisons++;
    }
    return [result, comparisons];
  }
}

module.exports = { LinearSearch };
