/**
 * Given two strings s and t , write a function to determine if t is an anagram of s.
 *
 * Frequency Counter
 * 12/05/2020
 */

var isAnagram = function (s, t) {
  let sObj = freqCount(s);
  let tObj = freqCount(t);

  // check length of sObj and tObj and confirm they are the same size
  let sSize = Object.keys(sObj).length;
  let tSize = Object.keys(tObj).length;

  if (sSize !== tSize) {
    return false;
  }

  // Actually iterate through the objs and confirm correct value
  for (let key in sObj) {
    // Check if the values even exist, (that it's not null === null)
    // then check for equal value

    if (!(key in tObj) || sObj[key] !== tObj[key]) {
      return false;
    }
  }

  return true;
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