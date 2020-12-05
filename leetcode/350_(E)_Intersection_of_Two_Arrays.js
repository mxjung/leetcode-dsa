/**
 * Given two arrays, write a function to compute their intersection.
 *
 * Frequency Counter
 * 12/05/2020
 */

var intersect = function (nums1, nums2) {
  let num1Freq = freqCount(nums1);

  return nums2.filter(num => {
    if (num1Freq[num]) {
      // subtract number of times we've seen this value
      // in nums1
      num1Freq[num]--;
      return true;
    } else {
      return false;
    }
  })
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