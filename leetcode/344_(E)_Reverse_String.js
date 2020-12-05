/**
 * Write a function that reverses a string. The input string is given as an array of characters ch
 * [].
 *
 * Do not allocate extra space for another array, you must do this by modifying the input array
 * in-place with O(1) extra memory.
 *
 * 12/05/2020
 */

var reverseString = function (s) {
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    let temp = s[i];
    s[i] = s[s.length - i - 1];
    s[s.length - i - 1] = temp;
  }

  return s;
};