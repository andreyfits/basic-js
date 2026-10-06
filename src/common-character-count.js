/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  const frequencies = new Map();

  for (const char of s1) {
    frequencies.set(char, (frequencies.get(char) || 0) + 1);
  }

  let count = 0;

  for (const char of s2) {
    const available = frequencies.get(char) || 0;

    if (available > 0) {
      frequencies.set(char, available - 1);
      count += 1;
    }
  }

  return count;
}

module.exports = {
  getCommonCharacterCount
};
