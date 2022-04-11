class LinearSearch {
  /**
   *
   * @param {Number[]} array : Array of Numbers ;
   * @param {Number} target : Target number to find inside array;
   * @returns {Object[]} : An array of objects, result and error, result is target number and if was found, error is type and message;
   */
  static search(array, target) {
    let result = { target: target, found: false };
    let error = { error: false, message: "" };
    let comparisons = 0;

    for (let i = 0; i < array.length; i++) {
      if (array[i] === target) {
        result.found = true;
        break;
      }
      comparisons++;
    }
    return [result, error, comparisons];
  }
}

module.exports = { LinearSearch };
