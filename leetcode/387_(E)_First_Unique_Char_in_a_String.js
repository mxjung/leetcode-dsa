/**
 * Given a string, find the first non-repeating character in it and return its index.
 * If it doesn't exist, return -1.
 *
 * Frequency Counter
 * 12/05/2020
 */

var firstUniqChar = function (s) {
  let sFreq = freqCount(s);

  for (let i = 0; i < s.length; i++) {
    if (sFreq[s[i]] === 1) {
      return i;
    }
  }

  return -1;
};

let freqCount = (str) => {
  let strObj = {};
  for (let letter of str) {
    if (strObj[letter]) {
      strObj[letter] = strObj[letter] + 1;
    } else {
      strObj[letter] = 1;
    }
  }

  return strObj;
}