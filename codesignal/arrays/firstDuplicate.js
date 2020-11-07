/**

Given an array a that contains only numbers in the range from 1 to a.length, find the first duplicate number for which the second occurrence has the minimal index. In other words, if there are more than 1 duplicated numbers, return the number for which the second occurrence has a smaller index than the second occurrence of the other number does. If there are no such elements, return -1.

11/06/2020
 */

function firstDuplicate(a) {
  let freqObj = {};
  let duplicate = -1;

  for (let val of a) {
    if (val in freqObj) {
      return val;
    } else {
      freqObj[val] = 1;
    }
  }

  return duplicate;
}