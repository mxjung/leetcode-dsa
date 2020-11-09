/**

Given a string s consisting of small English letters, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.

11/08/2020
 */

function firstNotRepeatingCharacter(s) {
  let freqObj = {};

  for (let i = 0; i < s.length; i++) {
    let val = s[i];
    if (val in freqObj) {
      freqObj[val] = [...freqObj[val], i];
    } else {
      freqObj[val] = [i];
    }
  }

  let singleVal = '_';
  let lowest = s.length;

  for (let key in freqObj) {
    if (freqObj[key].length === 1) {
      if (freqObj[key][0] < lowest) {
        singleVal = key;
        lowest = freqObj[key][0];
      }
    }
  }

  return singleVal;
}