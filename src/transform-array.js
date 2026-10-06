/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const DISCARD_NEXT = '--discard-next';
  const DISCARD_PREV = '--discard-prev';
  const DOUBLE_NEXT = '--double-next';
  const DOUBLE_PREV = '--double-prev';

  const result = [];
  const deleted = new Set();

  for (let i = 0; i < arr.length; i += 1) {
    const item = arr[i];

    switch (item) {
      case DISCARD_NEXT:
        if (i + 1 < arr.length) {
          deleted.add(i + 1);
        }
        break;
      case DISCARD_PREV:
        if (i - 1 >= 0 && !deleted.has(i - 1)) {
          result.pop();
        }
        break;
      case DOUBLE_NEXT:
        if (i + 1 < arr.length) {
          result.push(arr[i + 1]);
        }
        break;
      case DOUBLE_PREV:
        if (i - 1 >= 0 && !deleted.has(i - 1)) {
          result.push(arr[i - 1]);
        }
        break;
      default:
        if (!deleted.has(i)) {
          result.push(item);
        }
        break;
    }
  }

  return result;
}

module.exports = {
  transform
};
